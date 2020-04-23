import React, { Component } from 'react';
import { Button, Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import LogoTick from '../Photos/tick.png';
import LogoHome from '../Photos/home.png';
import history from './History';
import DatePicker from './DatePicker';
import '../App.css'

function seacrchingFor(word) {
    return function (search) {
        return search.name.toLowerCase().includes(word.toLowerCase()) || search.code.toLowerCase().includes(word.toLowerCase());
    }
}

export default class Contact extends Component {


    render() {

        //jsx
        return (
            <div class="text-center">
                <form class="wrap">
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
                            <h7><Nav.Link onClick={() => history.push('/contact')}>Contact</Nav.Link></h7>
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
                    <h1>Contact Us!</h1>
                    <p class="lead">
                        <h2>Contact information regarding the developers of this application:</h2>
                    </p>
                    <form class="transparentForm">
                        <p><u><h3>Emmanuel Lee: <mark>Elee@albany.edu</mark></h3></u></p>
                        <p><u><h3>Jane Hu: <mark>Jhu8@albany.edu</mark></h3></u></p>
                        <p><u><h3>Alandale Lauron: <mark>Alauron@albany.edu</mark></h3></u></p>
                        <p><u><h3>Jarret Mayo: <mark>Jjmayo@albany.edu</mark></h3></u></p>
                        <p><u><h3>Cheetah Louis: <mark>Clouis@albany.edu</mark></h3></u></p>
                        <p><u><h3>Htet Ye Min: <mark>HMin@albany.edu</mark></h3></u></p>
                    </form>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                </form>
                <footer class="navbar navbar-success bg-danger-success">
                    <div class="container-fluid text-center text-md-left">
                        <div class="row">
                            <div class="col-md-6 mt-md-0 mt-3">
                                <h5 class="text-uppercase">Github</h5>
                                <p>These are all of the branches to our project's github.</p>
                            </div>
                            <hr class="clearfix w-100 d-md-none pb-3"></hr>
                            <div class="col-md-3 mb-md-0 mb-3">
                                <h5 class="text-uppercase">Github Links</h5>
                                <ul class="list-unstyled">
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
                            <div class="col-md-3 mb-md-0 mb-3">
                            </div>
                            <div class="footer-copyright text-center py-3">© 2020 Copyright:
                            <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
                            </div>
                        </div>
                    </div>
                </footer>
                    </div>
                    );
                }
}