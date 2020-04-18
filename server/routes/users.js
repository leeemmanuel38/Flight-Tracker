const express = require('express');
const router = express.Router();
const passport = require('../passport'); 


// Custom Passport Callback - authenticate user on sign up
router.post('/signup', (req, res, next) => {
  passport.authenticate('local-signup', function(error, user, info) {

    if(error) {
      return res.status(500).json({
        message: error || 'something bad happened', 
  
      })
    }

    return res.json({user})
    
  })(req, res, next);

});

// Custom Passport Callback - authenticate user on log in
router.post('/login', function(req, res, next) {
  passport.authenticate('local-login', function(error, user, info) {

    if(error) {
      return res.status(400).json({
        message: error || 'something bad happened', 
  
      })
    }

    return res.json({user})
    
  })(req, res, next);
});
module.exports = router;
