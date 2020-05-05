/*
# Author(s): Saurabh Mhatre
# UL: https://medium.com/technoetics/create-basic-login-forms-using-create-react-app-module-in-reactjs-511b9790dede
# Modified by Emmanuel Lee and Cheetah Louis
# Date: May 5, 2020
# Flight Tracker Application 
# team 3
*/

import React, { Component } from 'react'; 
import {Redirect} from 'react-router-dom'; 
import axios from 'axios'; 
import {} from 'react-router-dom'; 
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import '../App.css';
import Drawer from './loginDrawer'; 

const style = {
    margin: 15,
   };
  
export default class Login extends Component {

    constructor(props){
        super(props);
        this.state={
          email:'',
          password:'',           
        }
      };

    // verify login authentication with back end strategy 
    handleSubmit = (event) => {
        event.preventDefault(); 
        const {email, password} = this.state;  
        axios({
            url: '/authentication/login',
            method: 'POST',
            data: {email, password},
        })
        .then ((response) => {
            const isAuthenticated = true;
            window.localStorage.setItem('isAuthenticated', isAuthenticated);
            this.setState({
                email: this.state.email, 
                isLoggedIn: true, 
            }) 
            this.props.history.push('./'); // on log in 
        })
        .catch ((error) => {
            this.setState({
                errorMessage: error.response.data.message
            })
        })
      
    };
    // save all changes to form as input is given 
    handleChange = (event) => {
        const {name, value} = event.target; 
        this.setState({
            [name]: value
        });  
    }; 

    render() {
        // grab authentication from local storage
        const isAuthenticated = window.localStorage.getItem('isAuthenticated');  

        // is user is not logged in 
        if(!isAuthenticated){
            return (
                <div class="ui centered aligned grid">
                    <div class="wrap2">
                        <MuiThemeProvider>
                            <div>
                                <Drawer />
                                <div>
                                <form class="loginForm">
                                <form required = {this.handleSubmit}>
                                    <p class="text-center">
                                        <TextField input type="text"
                                            name = "email"
                                            hintText="Enter your Email"
                                            floatingLabelText="Email"
                                            onChange = {this.handleChange}
                                        />
                                        <br/>
                                        <TextField input type="password"
                                            name = "password"
                                            hintText="Enter your password"
                                            floatingLabelText="Password"
                                            onChange = {this.handleChange}
                                        />
                                        <br/>
                                        <RaisedButton label="Login!" primary={true} style={style} onClick={(event) => this.handleSubmit(event)}/>
                                        <p><h4>{this.state.errorMessage}</h4></p>
                                    </p>
                                    </form>
                                    </form>
                                </div>
                            </div>
                        </MuiThemeProvider>
                    </div>
                </div>
            );
        
        }
        // if user is logged in 
        return(
            <Redirect to='./'/>
        ); 
    }
}