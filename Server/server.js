const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(express.json());

// Home route
server.get('/', (req, res) => res.send('Welcome to our anonymous posting platform!'))

// Posts routes
const postsRoutes = require('./routes/posts');
server.use('/posts', postsRoutes);

module.exports = server;