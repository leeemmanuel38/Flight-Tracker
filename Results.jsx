import React, { Component } from 'react'; 
import axios from 'axios'; 
import {} from 'react-router-dom'; 
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { render } from '@testing-library/react';
import Drawer from './ResultsDrawer'; 
import Toggle from './Toggle';


const style = {
    margin: 15,
   };
  
   export default class Results extends Component {
  
      render(){
          return(
            <div class="wrap">
              <MuiThemeProvider>
              <Drawer/>
                <div>
                    <div class="container">
                        <div class="row">
                            <div class="form-group col-md-12">
                            </div>
                            <div class="form-group col-md-12">
                            </div>            
                        </div>
                    </div> 
                  <p class="text-center">
                  <p class = "text-white"><p class="font-weight-bold"><h1>Available Flights (WIP)</h1></p></p>
                  </p>
                <div>
                <div class="container">
                    <div class="row">
                         <div class="form-group col-md-12">
                         </div>
                         <div class="form-group col-md-12">
                         </div>
                         <div class="form-group col-md-12">
                         </div>
                         <div class="form-group col-md-12">
                         </div>
                         <div class="form-group col-md-12">
                         </div>
                         <div class="form-group col-md-12">
                         </div>
                         <div class="form-group col-md-12">
                         </div>
                    </div>
                </div>
    
                <span class="d-block p-2 bg-dark text-white">
                <div class="container">
                    <div class="row"> 
                        <div class="form-group col-md-2">
                        <small><h6>Departing from: Albany</h6></small>
                        </div>
                        <div class="form-group col-md-2">
                        <h6>Arriving in: Spain</h6>
                        </div>
                        <div class="form-group col-md-2">
                        <h6>Price: 400</h6>
                        </div>
                        <div class="form-group col-md-2">
                        <h6>Date: 11/12/13</h6>
                        </div>
                        <div class="form-group col-md-2">
                        <h6>Class: First</h6>
                        </div>
                        <div class="form-group col-md-2">
                        <small><small><Toggle text="Flight Added!" /></small></small>
                        </div>
                            
                        </div> 
                        </div>
                        </span>
                        <br/>
                        <br/>
                        <div class="container">
                            <div class="row"> 
                                 <div class="form-group col-md-6">
                                 <button type="button" class="btn btn-primary">Submit</button>
                                </div>
                                </div>
                                </div>
                        
                        
                               
                    </div> 
                </div>         
             </MuiThemeProvider>
             <br/>
             <br/>
             <br/>
             <br/>
             <br/>
        </div>
    );
 }
}