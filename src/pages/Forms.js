import React from 'react'; 
import Login from '../components/Login/Login'
import RightForm from '../components/Register/RightForm';
import Home from './Home'
import './style.css'
import axios from "axios";
import PrivateRoute from './Route'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect,
  } from "react-router-dom";


export default  class Form extends React.Component
{
    state = {
        isAuthenticated: true
      };
    
  
    render(){
        const { isAuthenticated } = this.state;
return (
 
    <div className ="Eman1"> 
          <Router>
          <Link to="/login">Login</Link>
          <Link to="/RightForm"> Register</Link>
          <Link to="/Home"> Home</Link>
          <Switch>
           
              <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/RightForm">
            <RightForm/>
            </Route>
              
              <PrivateRoute isAuthenticated={isAuthenticated} exact path="/">
              <Home />
              </PrivateRoute>
              </Switch>
              </Router>

    </div>




)

}
}







