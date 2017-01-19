var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

Post = require('./models/post');

mongoose.connect('mongodb://localhost/blog');
var db = mongoose.connection;

// Default err url
app.get('/', function(req, res) {
    res.send('FORBIDDEN AREA!!');
});

// Get all posts
app.get('/api/posts', function(req, res) {
    Post.getPosts(function(err, posts){
       if (err) {
           throw err;
       }
        res.json(posts);
    });
});

// Get Single post
app.get('/api/post/:_id', function(req, res) {
    Post.getPostById(req.params._id, function(err, post) {
        if (err) {
            throw err;
        }
        
        res.json(post);
    });
});



app.listen(3000);
console.log('App running on port 3000....')