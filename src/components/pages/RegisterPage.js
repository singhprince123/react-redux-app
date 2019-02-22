import React, { Component } from 'react';
import './RegisterPage.css'
import AuthContext from  '../context/auth-context';

class RegisterPage extends Component {
  state = {
    isLogin: true,
    error: false,
    success: false
  };
  
  static contextType = AuthContext;


  constructor(props) {
    super(props);
    this.nameEl = React.createRef();
    this.emailEl = React.createRef();
    this.passwordEl = React.createRef();
  }

  switchModeHandler = () => {
    this.setState(prevState => {
      return { isLogin: !prevState.isLogin };
    });
  };

  submitHandler = event => {
    event.preventDefault();
    const name = this.nameEl.current.value;
    const email = this.emailEl.current.value;
    const password = this.passwordEl.current.value;

    if ( name.trim().length === 0 || email.trim().length === 0 || password.trim().length === 0) {
      return;
    }
    console.log('address =', this.state.isLogin)
    const data = { name ,email, password};
  
    if(this.state.isLogin){
       
       fetch(`http://localhost:4000/login`, {
        method: 'Post',
        body: JSON.stringify(data),
        headers:{
          'Content-Type' : 'application/json'
        }
      }).then(res => {
        if(res.status !== 200 && res.status !==201){
          this.setState({ error : true});
          console.log(res)
          throw new Error('Failed')
        }
       
        return res.json();
      })
      .then( resdata => {
        if(resdata.token){
          this.context.logIn(resdata.token, resdata.name);
        }
      })
      .catch(err => {
        console.log(err)
      })
  
    }else{
      fetch(`http://localhost:4000/register`, {
        method: 'Post',
        body: JSON.stringify(data),
        headers:{
          'Content-Type' : 'application/json'
        }
      }).then(res => {
        if(res.status !== 200 && res.status !==201){
          this.setState({ error : true});
          console.log(res)
          throw new Error('Failed')
        }else{
          this.setState({success : true})
        }
        
        return res.json();
      }).then(resdata => {
        console.log("resdata= ",resdata)

      })
    
      .catch(err => {
        console.log(err)
      })
  
    }
 
    
  };

  render() {
   
    return (
      <div className="form-container p-3 my-5">
       { this.state.error ? <p className="text-danger text-capitalize text-center notification">some user credentials are invalid or Signup first</p> : null}
       { this.state.success ? <p className="text-success text-capitalize text-center notification">Registration successfull..</p> : null}
      <form className="Register-form" onSubmit={this.submitHandler}>

      <div className="form-group">
          <label htmlFor="name">Name </label>
          <input type="text" id="name" ref={this.nameEl} className="form-control"  placeholder="eg.john" required/>
        </div>
        <div className="form-group">
          <label htmlFor="email">E-Mail</label>
          <input type="email" id="email" ref={this.emailEl} className="form-control" placeholder="eg.email@email.com" required />
        </div> 
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" ref={this.passwordEl} className="form-control" placeholder="password" required />
        </div>
        <div className="form-actions">
          <button type="submit" className="btn btn-success mr-4 mb-3" >Submit</button>
          <button type="button" onClick={this.switchModeHandler} className="btn btn-primary mb-3">
            Switch to {this.state.isLogin ? 'Signup' : 'Login'}
          </button>
        </div>
      </form>
      </div>
    );
  }
}

export default RegisterPage;