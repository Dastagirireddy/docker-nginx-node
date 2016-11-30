var express = require('express');
var mongoose = require('mongoose');
var app = express();

app.use(express.static(__dirname));

mongoose.connect('mongodb://' + process.env.MONGODB_PORT_27017_TCP_ADDR + ':' + process.env.MONGODB_PORT_27017_TCP_PORT + '/mydb', function(err, conn) {

    if (err) {
        console.log("Failed");
        return;
    }

    console.log("Success");
});

app.listen(3000, function() {

    console.log("Listening on port 3000");
});
