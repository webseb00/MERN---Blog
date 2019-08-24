const express = require('express');
const router = express.Router();

const PostController = require('../controllers/post.controller');

// route get all posts
router.route('/posts').get(PostController.getPosts);
// route get single post
router.route('/posts/:id').get(PostController.getPost);
// route add new post
router.route('/posts').post(PostController.addPost);
// route update old post
router.route('/posts/:id/edit').post(PostController.updatePost);
// get posts by range
router.route('/posts/range/:startAt/:limit').get(PostController.getPostsByRange);

module.exports = router;