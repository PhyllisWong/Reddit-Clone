const express = require('express');
const router = express.Router();
const Comment = require('../models/comments');
const Post = require('../models/posts');


// Make a new comment
router.post('/posts/:postId/comments', (req, res) => {
  // console.log('--- posts/:postId/comments ---');
  // console.log(req.body);

  const comment = new Comment(req.body);

  comment.save().then( comment => {
    // console.log(Post)
    return Post.findById(req.params.postId)
  })
    .then( post => {
      post.comments.unshift(comment);
      console.log(post);
      return post.save()

  }).then( savedPost => {
    console.log("BEER")
    return res.redirect(`/posts/${req.params.postId}`);
  })
    .catch( err => { console.log(err.message) })
});


module.exports = router;