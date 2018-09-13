const express = require('express');
const router = express.Router();
const Comment = require('../models/comments');
const Post = require('../models/posts');


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
  }).then((savedPost) => {

    // GET Kendra's help here!!!!!!!
    return res.render('post-show.hbs');
  })
    .catch( err => { console.log(err.message) })
});


module.exports = router;