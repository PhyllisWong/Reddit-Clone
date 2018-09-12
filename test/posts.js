const chai = require('chai');
const chaiHttp = require('chai-http');
const Post = require('../models/posts'); // Import post model
const should = chai.should();

chai.use(chaiHttp);

describe('Posts', () => {
	it('should create with valid attributes at POST /posts', function(done) {
		// test code

		let tour = { title: "post title", url: "https://www.google.com", summary: "post summary" };

		Post.findOneAndRemove(tour, () => {
			// Check for number of posts
			Post.find((err, posts) => {
				let postCount = posts.count;
				let post = {title: "post title", url: "https://www.google.com", summary: "post summary"};
				chai.request('localhost:3000')
					.end((err, res) => {
						Post.find((err, posts) => { // Check that the database has one more post in it
							if (err) {
								console.log("if error block")
								done(err)
							}
							postCount.should.be.equal(posts.count + 1);

							res.should.have.status(200); // Check that the response is successful
							done();
						})
					})
			})
		})
	})
});
