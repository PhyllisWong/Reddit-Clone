var express = require('express');
var router = express.Router();

// views/index.hbs
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Home | Learning Node' });
});

module.exports = router;