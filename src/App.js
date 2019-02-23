import React, { Component } from "react";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";

import "./App.css";

// import StudentForm from './components/StudentForm';
import Navigation from "./components/Navigation/Navigation";
import DashbordPage from "./components/pages/DashbordPage";
import StudentList from "./components/pages/StudentList";
import RegisterPage from "./components/pages/RegisterPage";
import AuthContext from "./components/context/auth-context";

class App extends Component {
  state = {
    token: null,
    name: null,
    studentsData: [],
    addingStudent: false,
    upatingStudent: false
  };

  logIn = (token, name) => {
    console.log("token =", token);
    console.log("name =", name);
    this.setState({
      token: token,
      name: name
    });
  };

  logOut = () => {
    this.setState({
      token: null,
      name: null
    });
    localStorage.clear();
  };

  showModalHandler = () => {
    this.setState({
      addingStudent: true
    });
  };

  closeModalHandler = () => {
    console.log("in canacel");
    this.setState({
      addingStudent: false
    });
  };

  submitMultiStepForm = values => {
    this.setState({ addingStudent: false });
    let newState = [];
    const {
      firstName,
      lastName,
      sex,
      favouriteSubject,
      email,
      address
    } = values;
    let id = Date.now() + Math.random();
    const data = {
      id,
      firstName,
      lastName,
      email,
      sex,
      favouriteSubject,
      address
    };
    newState = [...this.state.studentsData, data];
    console.log("new state =", newState);
    this.setState({
      studentsData: newState
    });
  };

  deleteStudentData = id => {
    let tempData = [...this.state.studentsData];
    const newData = tempData.filter(student => student.id !== id);
    this.setState({ studentsData: newData });
  };

  updateStudentData = id => {
    console.log(id);
  };

  render() {
    let Routes = "";
    if (!localStorage.getItem("token")) {
      Routes = (
        <React.Fragment>
          <Redirect to="/login" exact />
          <Route path="/login" component={RegisterPage} />
        </React.Fragment>
      );
    } else {
      Routes = (
        <React.Fragment>
          <Redirect to="/dashboard" exact />
          <Route exact path="/students" component={StudentList} />
          <Route exact path="/login" component={RegisterPage} />
          <Route exact path="/dashboard" component={DashbordPage} />
        </React.Fragment>
      );
    }
    return (
      <BrowserRouter>
        <React.Fragment>
          <AuthContext.Provider
            value={{
              token: this.state.token,
              name: this.state.name,
              studentsData: this.state.studentsData,
              addingStudent: this.state.addingStudent,
              logIn: this.logIn,
              logOut: this.logOut,
              showModalHandler: this.showModalHandler,
              closeModalHandler: this.closeModalHandler,
              submitMultiStepForm: this.submitMultiStepForm,
              deleteStudentData: this.deleteStudentData,
              updateStudentData: this.updateStudentData
            }}
          >
            <div className="App">
              <Navigation />
              {/* <StudentForm /> */}
            </div>
            {!localStorage.getItem("token") && <Redirect to="/login" exact />}
            {localStorage.getItem("token") && (
              <Redirect from="/login" to="/dashboard" exact />
            )}
            <main className="main-content">
              <Switch>
                {Routes}
              </Switch>
            </main>
          </AuthContext.Provider>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
