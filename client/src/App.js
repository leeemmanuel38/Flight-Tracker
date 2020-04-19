import React, { Component } from 'react'; 
import {Router, Route, Switch } from 'react-router-dom'; 

import History from './Components/History'; 
import Home from './Components/Home'; 
import Profile from './Components/Profile';
import Login from './Components/Login';
import Signup from './Components/Signup';
import About from './Components/About'; 
import NotFound from './Components/NotFound';

export default class App extends Component {

    render() {
        //jsx
        return (
          <Router history={History}>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/profile" component={Profile}/>
              <Route path="/login" component={Login}/>
              <Route path="/signup" component={Signup}/>
              <Route path="/about" component={About}/>
              <Route path="/404" component={NotFound}/>
            </Switch>
          </Router>
            
        );
    }
}