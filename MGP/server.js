var express = require('express');

var app = express();

var port = 8080;

app.use("/app", express.static(__dirname + '/app'));

app.get('/', function (req, res) { 
    res.sendFile(__dirname + '/index.html');
});

app.listen(port, function (err) { 
    console.log('Running on server port ' + port);  
});

//var http = require('http');
//var port = process.env.port || 1337;
//http.createServer(function (req, res) {
//    res.writeHead(200, { 'Content-Type': 'text/plain' });
//    res.end('Hello World\n');
//}).listen(port);