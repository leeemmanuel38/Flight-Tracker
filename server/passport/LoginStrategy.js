/*
# Author(s): Accimeesterlin
# Modified by Emmanuel Lee
# URL: https://www.youtube.com/watch?v=vLp0XluCT90
# Date: May 5, 2020
# Flight Tracker Application 
# team 3
*/
const Strategy = require('passport-local').Strategy; 
const User = require('../models/users');
const bcrypt = require('bcryptjs');

const salt = bcrypt.genSaltSync(10);

const LoginStrategy = new Strategy({passReqToCallback: true, usernameField: 'email' }, function(req, email, password, done) {
    
    User.findOne({ email }).lean().exec((err, user) => {
        if (err) {
            return done(error, null);
        }
        if (!user){
            return done('User does not exist', null); 
        }

        const isPasswordValid = bcrypt.compareSync(password, user.password); 

        if (!isPasswordValid){
            return done('Email or Password incorrect', null); 
        }
        
        return done(null, user);  
        
    }); 
});

module.exports = LoginStrategy; 

