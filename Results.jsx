import React, { Component } from 'react'; 
import axios from 'axios'; 
import {} from 'react-router-dom'; 
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { render } from '@testing-library/react';

const style = {
    margin: 15,
   };
  
   export default class Results extends Component {
  
      render(){
          return(
            <div>
              <MuiThemeProvider>
                <div>
                <AppBar title="Results"/>
                    <div class="container">
                        <div class="row">
                            <div class="form-group col-md-12">
                            </div>
                            <div class="form-group col-md-12">
                            </div>            
                        </div>
                    </div> 
                  <p class="text-center">
                  <p class="font-weight-bold"><h1>Available Flights</h1></p>
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
    
                <div class="container">
                    <div class="row">
                        <div class="form-group col-md-6">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="autoSizingCheck2"></input>
                                    <label class="form-check-label" for="autoSizingCheck2">
                                        Add flight to list
                                    </label>
                            </div>
                        </div>
                        <div class="form-group col-md-6">
                             <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="autoSizingCheck2"></input>
                                    <label class="form-check-label" for="autoSizingCheck2">
                                        Add flight to list
                                    </label>
                             </div>
                        </div> 
                    </div>
                </div>
                <div class="container">
                    <div class="row"> 
                        <div class="form-group col-md-6">
                            <ul class="list-group">
                                <li class="list-group-item active">Flight 1</li>
                                <li class="list-group-item">Airline: Delta</li>
                                <li class="list-group-item">Destination: Albany</li>
                                <li class="list-group-item">Origin: Florida</li>
                                <li class="list-group-item">Price: $300</li>
                                <li class="list-group-item">Class: coach</li>
                            </ul>
                        </div>  
                        <div class="form-group col-md-6">
                            <ul class="list-group">
                                <li class="list-group-item active">Flight 2</li>
                                <li class="list-group-item">Airline: American</li>
                                <li class="list-group-item">Destination: LA</li>
                                <li class="list-group-item">Origin: Albany</li>
                                <li class="list-group-item">Price: $800</li>
                                <li class="list-group-item">Class: First Class</li>
                            </ul>
                        </div> 
                        <div class="form-group col-md-12">
                        </div>
                        <div class="form-group col-md-5.5">
                        </div>
                        <div class="form-group col-md-6">
                        <button type="button" class="btn btn-primary">Submit</button>
                        </div>       
                    </div> 
                </div>
                </div>         
            </div>
             </MuiThemeProvider>
        </div>
    );
 }
}

        
