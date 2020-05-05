import React, { Component } from 'react'; 
import axios from 'axios'; 
import {} from 'react-router-dom'; 
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Drawer from './loginDrawer';



export default class Profile extends Component {
    
    render() {

        //jsx
        return (
            <div>
                <MuiThemeProvider>
                    <div>
                        <Drawer />
                        <div>
                <p class="text-center">
                    <h1>Welcome User !</h1>
                </p>
            </div>
            </div>
            </MuiThemeProvider>
            </div>
        );
    }
}