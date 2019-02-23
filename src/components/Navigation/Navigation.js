import React from 'react'
import './Navigation.css'
import { NavLink } from 'react-router-dom';
import AuthContext from '../context/auth-context'

export default function Navigation() {
let token = localStorage.getItem('token');
 return  <AuthContext.Consumer>
    { context => {
      return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <h2 className="navbar-brand custom-brand" >Student Portal</h2>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav ml-auto">
            {/* {!context.token &&  */}
            {! token &&
            (<li className="nav-item">
              <NavLink to="/login" className="nav-link">Login</NavLink>
            </li>
            )}
            {token && 
            <React.Fragment>
            (<li className="nav-item">
              <NavLink to="/dashboard" className="nav-link text-capialize">Dashboard</NavLink>
            </li> 
             <li className="nav-item">
              <NavLink to="/students" className="nav-link text-capitalize">student list</NavLink>
            </li>
              <li className="nav-item">
              <p onClick={context.logOut} className="nav-link text-capitalize">log out</p>
            </li>
            </React.Fragment>
            }
           
          </ul>
        </div>  
      </nav>
      )
    }}
  </AuthContext.Consumer>
  
}
