const Comment = require('../models/comments');
const Post = require('../models/posts');

module.exports = (app) => {
  app.post('/posts/:postId/comments', (req, res) => {
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

      console.log(savedPost)

      // Render or redirect HERE!!!
    })
      .catch( err => { console.log(err.message) })
  })
};