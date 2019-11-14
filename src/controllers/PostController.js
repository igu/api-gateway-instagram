const Post = require('../models/Post');

module.exports = {
    async index(req, res, next) {

    },

    async store(req, res, next) {
        return res.json({ ok: true });
    }
};