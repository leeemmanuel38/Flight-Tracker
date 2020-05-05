/*
# Author(s): Emmanuel Lee
# Date: May 5, 2020
# Flight Tracker Application 
# team 3
*/

import React, { Component } from 'react'; 
import {Router, Route, Switch } from 'react-router-dom'; 

import History from './Components/History'; 
import Home from './Components/Home'; 
import Profile from './Components/Profile';
import Login from './Components/Login';
import Signup from './Components/Signup';
import About from './Components/AboutUs'; 
import Results from './Components/Results'; 
import Contact from './Components/Contact';
import TestAPI from './Components/TestAPI';


export default class App extends Component {
    //Routing links between pages
    render() {
        return (
          <Router history={History}>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/profile" component={Profile}/>
              <Route path="/login" component={Login}/>
              <Route path="/signup" component={Signup}/>
              <Route path="/about" component={About}/>
              <Route path="/results" component={Results}/>
              <Route path="/Contact" component={Contact}/>
              <Route path="/testApi" component={TestAPI}/>
            </Switch>
          </Router>
        );
    }
}