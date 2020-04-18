import React, { Component } from 'react'; 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 

import History from './Components/History'; 
import Home from './Components/Home'; 
import Profile from './Components/Profile';
import Dashboard from './Components/Dashboard'; 
import Login from './Components/Login';
import Signup from './Components/Signup';
import NotFound from './Components/NotFound';

export default class App extends Component {

    render() {
        //jsx
        return (
          <Router history={History}>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/profile" component={Profile}/>
              <Route path="/dashboard" component={Dashboard}/>
              <Route path="/login" component={Login}/>
              <Route path="/signup" component={Signup}/>
              <Route path="/404" component={NotFound}/>
            </Switch>
          </Router>
            
        );
    }
}