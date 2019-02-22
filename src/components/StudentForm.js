import React, { Component } from 'react'
import StudentFormFirstPage from './StudentFormFirstPage'
import StudentFormSecondPage from './StudentFormSecondPage'
import StudentFormThirdPage from './StudentFormThirdPage'
import AuthContext from '../components/context/auth-context'
import {reset } from 'redux-form'
import { connect  } from 'react-redux'
import * as actionCreators from '../store/actions/actions'

class StudentForm extends Component {
  state ={
    page: 1,
    
  }

  static contextType  = AuthContext;

  nextPage = () =>{
    this.setState({ page: this.state.page + 1 })
  }

  previousPage = () => {
    this.setState({ page: this.state.page - 1 })
  }

  onSubmit = (values, dispatch) =>{
       this.context.submitMultiStepForm(values);
        this.props.onSubmitMultiStepForm(values)
        dispatch(reset('studentDetails'))
  }

  render() {
   
    
    const { page } = this.state
    return (<div>
        {page === 1 && <StudentFormFirstPage onSubmit={this.nextPage}  />}
        {page === 2 && <StudentFormSecondPage previousPage={this.previousPage} onSubmit={this.nextPage} />}
        {page === 3 && <StudentFormThirdPage previousPage={this.previousPage} onSubmit={this.onSubmit}/>}
      </div>
    )
  }
}


const MapDispatchToProps = dispatch => {
  return {
    onSubmitMultiStepForm : (values) => dispatch(actionCreators.onSubmitForm(values))     
  }
}

export default connect(null, MapDispatchToProps)(StudentForm);