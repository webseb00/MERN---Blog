const express = require('express');
const router = express.Router();

const PostController = require('../controllers/post.controller');

router.route('/posts').get(PostController.getPosts);

router.route('/posts/:id').get(PostController.getPost);

module.exports = router;