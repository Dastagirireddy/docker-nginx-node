var express = require('express'),
    redis = require('redis'),
    mongoose = require('mongoose');

var url = process.env.MONGODB;
var app = express();

app.use(express.static(__dirname));

mongoose.connect(url, function(err, conn) {

    if (err) {
        console.log("Failed");
        return;
    }

    console.log("Success");
});

// APPROACH 2: Using host entries created by Docker in /etc/hosts (RECOMMENDED)
var client = redis.createClient(process.env.REDIS_HOST);

app.use(function(req, res, next) {

    client.incr('counter', function(err, counter) {
        if (err) return console.log(err);
        console.log('This page has been viewed ' + counter + ' times!');
        next();
    });
});

console.log('This page has been viewed times!');

app.listen(process.env.PORT || 3000, function() {

    console.log('Listening on port ' + (process.env.PORT || 3000));
});
