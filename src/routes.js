const express = require('express');
const multer = require('multer');
const uploadConfig = require('./api-post-insta/config/upload');

const PostController = require('./api-post-insta/controllers/PostController');
const LikeController = require('./api-like-insta/controllers/LikeController');

const routes = new express.Router();
const upload = multer(uploadConfig);

routes.post('/posts', upload.single('image'), PostController.store);
routes.get('/posts', PostController.index);
routes.delete('/posts/:id', PostController.delete);

routes.post('/posts/:id/like', LikeController.store);
routes.post('/posts/:id/deslike', LikeController.update);

module.exports = routes;