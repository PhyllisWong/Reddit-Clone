const Post = require('../models/posts.js');

module.exports = (app) => {
	// CREATE
	app.post('/posts/new', (req, res) => {

		// INSTANTIATE INSTANCE OF POST MODEL
		let post = new Post(req.body);
		console.log(req.body);

		// SAVE INSTANCE OF POST MODEL TO DB
		post.save((err, post) => {
			// REDIRECT TO THE ROOT
			return res.redirect('/');
		})
	});
};