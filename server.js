var express = require('express');
var app = express();

var portNumber = process.env.PORT;
var ipNumber = process.env.IP;

app.get('/', function(req, res) {
    res.send('Hello world!');
});

app.listen(portNumber,  function() {
    console.log('Example app listening on ip: ' + ipNumber  + ' port: ' + portNumber + '!');
});