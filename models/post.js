var mongoose = require('mongoose');

var postSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        Default: Date.now
    }
});

var Posts =  module.exports = mongoose.model('Post', postSchema);

/* CRUD OPERATION STARS */

// Get all the posts
module.exports.getPosts = function(callback, limit) {
    Posts.find(callback).limit(limit);
}

// Get single post
module.exports.getPostById = function(_id, callback) {
    Posts.findById(_id, callback);
}