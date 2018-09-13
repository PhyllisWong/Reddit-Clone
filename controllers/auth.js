const express = require('express');
const router = express.Router();


// Render the signup form
router.get('/sign-up', (req, res) => {
  res.render('sign-up');
});


module.exports = router;