import React, { Component } from 'react'; 
import axios from 'axios'; 
import {} from 'react-router-dom'; 
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import Drawer from './loginDrawer'; 

const style = {
    margin: 15,
   };
  
export default class Login extends Component {

    constructor(props){
        super(props);
        this.state={
          email:'',
          password:''
          
        }
      };

    handleSubmit = (event) => {
        event.preventDefault(); 
        const {email, password} = this.state;  
        axios({
            url: '/authentication/login',
            method: 'POST',
            data: {email, password},
        })
        .then ((response) => {
            this.props.history.push('./profile'); // on log in 
        })
        .catch ((error) => {
            this.setState({
                errorMessage: error.response.data.message
            }) // on log out
        })
      
    };
    handleChange = (event) => {
        const {name, value} = event.target; 
        this.setState({
            [name]: value
        });  
    }; 

    render() {

        //jsx
        return (
            <div class="wrap2">
               
                <MuiThemeProvider>
                     
                    <div>
                        <Drawer />
                        
                        <div>
                        <form class="transparentForm">
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
                                <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleSubmit(event)}/>
                                <p><h5>{this.state.errorMessage}</h5></p>
                            </p>
                            </form>
                            </form>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                        </div>
                    </div>
                    
                </MuiThemeProvider>
            
                
            </div>
        );
    }
}