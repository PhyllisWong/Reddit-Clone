const express = require('express');
const router = express.Router();
const User = require('../models/users');


// Render the signup form
router.get('/sign-up', (req, res) => {
  res.render('sign-up');
});


// POST: creates a new user
router.post('/sign-up', (req, res) => {
  const user = new User(req.body);

  user.save().then( user => {
    res.redirect('/');
  }).catch( err => {
    console.log(err.message);
  })
});


module.exports = router;