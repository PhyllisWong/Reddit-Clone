var express = require('express');
var router = express.Router();

// views/index.hbs
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Reddit-Clone' });
});

router.get('/posts/new', function(req, res) {
	res.render('posts-new');
});

module.exports = router;