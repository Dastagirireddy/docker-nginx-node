var express = require('express');
var mongoose = require('mongoose');

var app = express();

console.log("env:::", process.env.NODE_ENV);

app.use(express.static(__dirname));

mongoose.connect("mongodb://104.131.3.219:27017/test", function(err, conn) {

    if (err) {
        console.log("Failed");
        return;
    }

    console.log("Success");
});

app.listen(3000, function() {

    console.log("Listening on port 3000");
});
