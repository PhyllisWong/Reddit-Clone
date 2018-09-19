const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/users');


// Render the signup form
router.get('/sign-up', (req, res) => {
  res.render('sign-up');
});


// POST: creates a new user
router.post('/sign-up', (req, res) => {
  // CREATE User and JWT
  const user = new User(req.body);

  user.save().then( user => {
    let token = jwt.sign({ _id: user._id }, process.env.SECRET, { expiresIn: "60 days" });
    res.cookie('nToken', token, { maxAge: 900000, httpOnly: true });
    res.redirect('/');
    console.log(req.cookies);
  }).catch( err => {
    console.log(err.message);
    return res.status(400).send({ err: err });
  })
});

// LOGOUT
router.get('/logout', (req, res) => {
  res.clearCookie('nToken');
  res.redirect('/');
});

module.exports = router;