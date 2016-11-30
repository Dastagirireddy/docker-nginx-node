var express = require('express'),
    redis = require('redis'),
    mongoose = require('mongoose');

var url = process.env.MONGODB;
var app = express();

app.use(express.static(__dirname));

console.log(process.env);

mongoose.connect(url, function(err, conn) {

    if (err) {
        console.log("Failed");
        return;
    }

    console.log("Success");
});

console.log(process.env.REDIS_PORT_6379_TCP_ADDR + ':' + process.env.REDIS_PORT_6379_TCP_PORT);

// APPROACH 1: Using environment variables created by Docker
// var client = redis.createClient(
// 	process.env.REDIS_PORT_6379_TCP_PORT,
//   	process.env.REDIS_PORT_6379_TCP_ADDR
// );

// APPROACH 2: Using host entries created by Docker in /etc/hosts (RECOMMENDED)
var client = redis.createClient('6379', 'redis');

client.incr('counter', function(err, counter) {
    if (err) return console.log(err);
    connect.log('This page has been viewed ' + counter + ' times!');
});

app.listen(process.env.PORT || 3000, function() {
    console.log('Listening on port ' + (process.env.PORT || 3000));
});
