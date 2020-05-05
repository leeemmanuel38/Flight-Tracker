import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import LogoTick from '../Photos/tick.png';
import LogoHome from '../Photos/home.png';
import history from './History';
import '../App.css'


export default class Contact extends Component {


    render() {

        //jsx
        return (
            <div>
                <form class="wrap2">
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
                    <Navbar bg="primary" variant="dark">
                        <nav class="navbar navbar-primary bg-primary">
                            <img src={LogoTick} width="50" height="50" alt="" />
                            <img src={LogoHome} width="25" height="25" alt="" />
                        </nav>

                        <Nav className="mr-auto" >
                            <h7><Nav.Link onClick={() => history.push('/about')}>About</Nav.Link></h7>
                            <h7><Nav.Link onClick={() => history.push('/')}>Home</Nav.Link></h7>
                        </Nav>

                        <div class="btn">
                            <button type="button" onClick={() => history.push('/signup')} class="btn btn-warning btn-lg">SIGNUP</button>
                        </div>
                        <div class="btn">
                            <button type="button" onClick={() => history.push('/login')} class="btn btn-success btn-lg">LOGIN</button>
                        </div>
                    </Navbar>
                    <h1 class="text-center">Contact Us!</h1>
                    <p class="lead text-center">
                        <h2>Contact information regarding the developers of this application:</h2>
                    </p>
                    <form class="transparentForm">
                    <div class="contactUs text-center">
                        <p><u><h3>Emmanuel Lee: Elee@albany.edu</h3></u></p>
                        <p><u><h3>Jane Hu: Jhu8@albany.edu</h3></u></p>
                        <p><u><h3>Alandale Lauron: Alauron@albany.edu</h3></u></p>
                        <p><u><h3>Jarret Mayo: Jjmayo@albany.edu</h3></u></p>
                        <p><u><h3>Cheetah Louis: Clouis@albany.edu</h3></u></p>
                        <p><u><h3>Htet Ye Min: HMin@albany.edu</h3></u></p>
                    </div>
                    </form>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <Navbar  bg="dark" variant="dark">
                    
                        <Nav className="mr-auto" >  
                            <h7><Nav.Link onClick={() => history.push('/privacy')}>Privacy policy</Nav.Link></h7>
                            <h7><Nav.Link onClick={() => history.push('/info')}>Using this site</Nav.Link></h7>
                        </Nav>
                        <div class="row">
                            <h6>  | <a href="https://www.cheapoair.com/">cheapoair</a>   |   </h6>
                            <h6>  |  <a href="https://www.expedia.com/">expedia</a>   |  </h6>
                            <h6>  |   <a href="https://www.justfly.com/">justfly</a>  |  </h6>
                        </div>

                    </Navbar>
                    
                    <Navbar bg="light" variant="dark" >  
                        <footer>
                            <div class="footer-copyright py-3">© 2020 Copyright:
                                <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
                            </div>
                        </footer>
                    </Navbar>
                 
                </form>
                
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-6 mt-md-0 mt-3">
                            <h5 class="text-uppercase">Github</h5>
                            <p>These are the branches to our project's github:</p>
                        </div>
                       
                        <div class="col-md-3 mb-md-0 mb-3">
                            <h5 class="text-uppercase">Github Links</h5>
                            <ul class="list-unstyled text-left">
                                <li>
                                    <a href="https://github.com/leeemmanuel38/Flight-Tracker/tree/Alandale">Alandale</a>
                                </li>
                                <li>
                                    <a href="https://github.com/leeemmanuel38/Flight-Tracker/tree/Cheetah">Cheetah</a>
                                </li>
                                <li>
                                    <a href="https://github.com/leeemmanuel38/Flight-Tracker/tree/Emmanuel">Emmanuel</a>
                                </li>
                                <li>
                                    <a href="https://github.com/leeemmanuel38/Flight-Tracker/tree/Jane">Jane</a>
                                </li>
                                <li>
                                    <a href="https://github.com/leeemmanuel38/Flight-Tracker/tree/Jarrett">Jarrett</a>
                                </li>
                                <li>
                                    <a href="https://github.com/leeemmanuel38/Flight-Tracker/tree/Ryan">Ryan</a>
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
               
            </div>
        );
    }
}