const passport = require('passport');

//inport all strategies 
const SignupStrategy = require('./SignupStrategy');
const LoginStrategy = require('./LoginStrategy');

passport.use("local-signup", SignupStrategy); 
passport.use("local-login", LoginStrategy); 

module.exports = passport; 