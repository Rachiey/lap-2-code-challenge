const Post = require('../models/Post');

async function index(req, res) {
    try {
        const posts = await Post.all;
        res.status(200).json(posts);
    } catch (err) {
        console.log(err);
        res.status(404).send('Posts not found');
    }
}

async function show(req, res) {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (err) {
        console.log(err);
        res.status(404).send('Post not found');
    }
}

async function create(req, res) {
    try{
        const post = await Post.create(req.body);
        res.status(201).json(post);
    } catch (err) {
        console.log(err);
        res.status(422).send('Post Could not be created');
    }
}

module.exports = { index, show, create }