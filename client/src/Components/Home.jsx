import React, { Component } from 'react'; 
import {Button,Nav,Navbar,Form,FormControl} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import LogoTick from '../Photos/tick.png';
import LogoHome from '../Photos/home.png';
import history from './History'; 

import '../App.css'


export default class Home extends Component {

    state = {
        startDate: new Date()
      };

    handleChange = date => {
    this.setState({
        startDate: date
    });
    };
    render() {

        //jsx
        return (
            <div className="HomePage">
                <div className="Navbar">
                    <Navbar bg="success">
                        <div class="form-row">
                            <div class="badge">
                                <span class="badge badge-warning"><h4>Track Your Next Trip!</h4></span>
                            </div>
                            <div class="badge">
                                <span class="badge badge-warning"><h4>Book When You Find The Best Rates!</h4></span>
                            </div>
                            <div class="badge">
                                <span class="badge badge-warning"><h4>Never Over Pay Again!</h4></span>
                            </div>
                        </div>
                    </Navbar> 
                    <Navbar bg= "primary" variant="dark">
                        <nav class="navbar navbar-primary bg-primary">
                            <img src={LogoTick} width="50" height="50" alt=""/>
                            <img src={LogoHome} width="25" height="25" alt=""/>
                        </nav>

                        <Nav className="mr-auto" >
                            <h7><Nav.Link onClick={() => history.push('/')}>Home</Nav.Link></h7>
                            <h7><Nav.Link onClick={() => history.push('/About')}>About</Nav.Link></h7>
                        </Nav>

                        <div class="btn">
                            <button type="button" onClick={() => history.push('/Register')} class="btn btn-warning btn-lg">SIGNUP</button>
                        </div>
                        <div class="btn">
                            <button type="button" onClick={() => history.push('/Login')} class="btn btn-success btn-lg">LOGIN</button>
                        </div>
                    </Navbar> 
                    <br/>
                    <br/>
                    <p class="text-center">
                        <div>
                            <span class="badge badge-primary"><h2>T I C K-C L I C: The Flight Tracker App!</h2></span>
                        </div>
                        <div>
                            <h3>Just one <span class="badge badge-primary">C L I C</span> away from finding the best rates on flights</h3>
                        </div>`
                    </p>
                </div>


                <div class="container">
                    <div class="row">
                        <div class="form-group col-md-5">
                            <label><h7>Departing airport</h7></label>
                            <input type="text" class="form-control form-control-lg" id = "Departure" placeholder="Leaving from"></input>
                        </div>

                        <div class="form-group col-md-5">
                            <label><h7>Arriving airport</h7></label>
                            <input type="text" class="form-control form-control-lg" id = "Arrival" placeholder="Going to"></input>
                        </div>
                        
                        <div class="form-group col-sm-5">
                            <div class="form-row">
                                <div class="form-group col-sm-5">
                                    <label for="EarliestDepart"><h7>Earliest departure Date</h7></label>
                                    <DatePicker
                                        selected={this.state.startDate}
                                        onChange={this.handleChange} 
                                    />
                                </div>

                                <div class="form-group col-sm-5">
                                    <label for="LatestReturn">Latest return date</label>
                                    <DatePicker
                                        selected={this.state.startDate}
                                        onChange={this.handleChange} 
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container">
                    <div class="row">
                        <div class="form-col col-sm-2">
                            <label for="price">Highest price willing to pay</label>
                            <div class="input-group mb-2">
                                <div class="input-group-text">$</div>
                                <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Enter price"></input>
                            </div>
                        </div>
                        <div class="col-auto my-1">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="autoSizingCheck2"></input>
                                <label class="form-check-label" for="autoSizingCheck2">
                                    Notify me (Must be logged in)
                                </label>
                            </div>
                        </div>     
                    </div>
                    <button type="submit" class="btn btn-success">SUBMIT</button>
                </div>
                
            </div>
    
        );
    }
}