const Post = require('../models/Post');

module.exports = {
    async store(req, res, next) {

        const post = await Post.findById(req.params.id);

        post.likes++;

        await post.save();

        return res.json(post);
    }
};