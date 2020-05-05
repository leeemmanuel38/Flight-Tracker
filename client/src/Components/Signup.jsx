/*
# Author(s): Saurabh Mhatre, accimeesterlin, Emmanuel Lee
# URL: https://medium.com/technoetics/create-basic-login-forms-using-create-react-app-module-in-reactjs-511b9790dede
# URL: https://www.youtube.com/watch?v=vLp0XluCT90
# Modified by Cheetah Luis
# Date: May 5, 2020
# Flight Tracker Application 
# team 3
*/

import React, { Component } from 'react'; 
import axios from 'axios'; 
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {Redirect} from 'react-router-dom'; 

import Drawer from './SignupDrawer'; 

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

    // verify sign up authentication with back end strategy 
    handleSubmit = (event) => {
        event.preventDefault(); 
        const {email, password} = this.state;  
        axios({
            url: '/authentication/signup',
            method: 'POST',
            data: {email, password},
        })
        .then ((response) => {
            const isAuthenticated = true;
            window.localStorage.setItem('isAuthenticated', isAuthenticated);
            this.setState({
                email: this.state.email, 
            }) 
            this.props.history.push('./'); // on sign up
        })
        .catch ((error) => {
            this.setState({
                errorMessage: error.response.data.message
            }) 
        })
      
    };
    handleChange = (event) => {
        const {name, value} = event.target; 
        this.setState({
            [name]: value
        });  
    }; 

    render() {
        const isAuthenticated = window.localStorage.getItem('isAuthenticated'); 
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
                                            hintText="Create a password"
                                            floatingLabelText="Password"
                                            onChange = {this.handleChange}
                                        />
                                        <br/>
                                        <RaisedButton label="Register!" primary={true} style={style} onClick={(event) => this.handleSubmit(event)}/>
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
        return(
            <Redirect to='./'/>
        ); 
    }  
}