import React, {Component} from 'react';
import LogoTick from '../Photos/tick.png';
import LogoHome from '../Photos/home.png';
import {Nav,Navbar} from 'react-bootstrap';
//import {BrowserRouter as Router,Switch,Route,Link,Redirect} from "react-router-dom";
import '../App.css'
import history from './History'; 



export default class NavbarComponent extends Component{

   
    render(){
        return(
           
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
                        
                    </Nav>

                <div class="btn">
                    <button type="button" onClick={() => history.push('/signup')} class="btn btn-warning btn-lg">SIGNUP</button>
                </div>
                <div class="btn">
                    <button type="button" onClick={() => history.push('/login')} class="btn btn-success btn-lg">LOGIN</button>
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
            
        );
    }
}


