const express = require('express');
const router = express.Router();
const Post = require('../models/posts.js');


// Home route / index route Show all posts
router.get('/', (req, res) => {
	Post.find({}, (err, posts) => {
		console.log(posts);
		res.render('posts-index.hbs', {
			posts: posts
		});
	});
});

// Renders the form
router.get('/posts/new', function(req, res) {
	res.render('posts-new');
});

// Create post
router.post('/posts/new', (req, res) => {
	// INSTANTIATE INSTANCE OF POST MODEL
	let post = new Post(req.body);
	console.log(req.body);

  // SAVE INSTANCE OF POST MODEL TO DB
  post.save((err, post) => {
	// REDIRECT TO THE ROOT
	return res.redirect('/');
	})
});

// Show post by posts/:id
router.get('/posts/:id', function (req, res) {
	// LOOK UP THE POST
	Post.findById(req.params.id).then((post) => {
		res.render('post-show.hbs', { post })
	}).catch((err) => {
		console.log(err.message)
	})
});


module.exports = router;