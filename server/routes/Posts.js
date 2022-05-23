const express = require('express');
const router = express.Router();
const { getAllPosts, createPost, deletePost, updatePost, findPost } = require('../controllers/Post');

router.route('/').get(getAllPosts).post(createPost);

router.route('/:id').delete(deletePost).patch(updatePost).get(findPost);

module.exports = router;