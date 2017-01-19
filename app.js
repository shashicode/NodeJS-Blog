var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// Middleware for Body Parser
app.use(bodyParser.json());

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

// Add post
app.post('/api/posts', function(req, res) {
   var post_data = req.body;
    Post.addPost(post_data, function(err, post) {
        if (err) {
            throw  err;
        }
        res.json(post);
    }); 
});

// Update post
app.put('/api/posts/:_id', function(req, res) {
    var id = req.params._id;
   var post_data = req.body;
    Post.updatePost(id, post_data, {}, function(err, post) {
        if (err) {
            throw  err;
        }
        res.json(post);
    }); 
});


// Remove post
app.delete('/api/posts/:_id', function(req, res) {
   var id = req.params._id;
    Post.removePost(id, function(err, post) {
        if (err) {
            throw err;
        }
        res.json(post);
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