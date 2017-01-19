var mongoose = require('mongoose');

var postSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    slug: {
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

// Add post
module.exports.addPost = function(post_obj, callback) {
    Posts.create(post_obj, callback);
}

// Update post
module.exports.updatePost = function(id, post, options, callback) {
    var query = {_id: id};
    var update = {
        title: post.title,
        slug: post.slug,
        body: post.body,
        category: post.category,
        author: post.author
    }
    
    Posts.findOneAndUpdate(query, update, options, callback);
}

// Remove post
module.exports.removePost = function(id, callback) {
    var query = {_id: id};
    Posts.remove(query, callback);
}