/*
# Author(s): Accimeesterlin
# Modified by Emmanuel Lee
# URL: https://www.youtube.com/watch?v=vLp0XluCT90
# Date: May 5, 2020
# Flight Tracker Application 
# team 3
*/
const passport = require('passport');

//inport all strategies 
const SignupStrategy = require('./SignupStrategy');
const LoginStrategy = require('./LoginStrategy');

passport.use("local-signup", SignupStrategy); 
passport.use("local-login", LoginStrategy); 

module.exports = passport; 