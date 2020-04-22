import React from 'react';
import LogoTick from './tick.png';
import LogoHome from './home.png';
import Login from './Login'; 
import Signup from './Register'; 
import {Button,Nav,Navbar,Form,FormControl} from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  

class NavbarComponents extends React.Component{

  

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
                        <h7><Nav.Link href="#home">Home</Nav.Link></h7>
                        <h7><Nav.Link href="#tracking">Contact Us</Nav.Link></h7>
                        <h7><Nav.Link href="#pricing">About Us</Nav.Link></h7>
                    </Nav>

                <div class="btn">
                    <button type="button" class="btn btn-warning btn-lg">SIGNUP</button>
                </div>
                <div class="btn">
                    <button type="button" class="btn btn-success btn-lg">LOGIN</button>
                </div>
                <div class="btn">
                    <button type="button" class="btn btn-success btn-lg">LOGOUT</button>
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


export default NavbarComponents