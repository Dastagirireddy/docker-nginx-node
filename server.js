var express = require('express');
var mongoose = require('mongoose');
var app = express();
var url = process.env.MONGODB;

app.use(express.static(__dirname));

console.log(process.env);

mongoose.connect(url, function(err, conn) {

    if (err) {
        console.log("Failed");
        return;
    }

    console.log("Success");
});

app.listen(3000, function() {

    console.log("Listening on port 3000");
});
