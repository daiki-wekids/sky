var http = require('http');
var socketio = require('socket.io');
var fs = require('fs');
var server = http.createServer(function(req, res) {

var url = req.url;
res.writeHead(200, {'Content-Type' : 'text/html'});
res.end(fs.readFileSync(__dirname + '/index.html', 'utf-8'));

var express = require('express');
var app = express();

//app.use('/styles', express.static(__dirname + '/styles'));
app.use(express.static(__dirname + '/public'));
res.writeHead(200, {'Content-Type' : 'text/html'});
res.end(fs.readFileSync(__dirname + '/index.html', 'utf-8'));
/*
  if ('/' == url) {
      res.writeHead(200, {'Content-Type' : 'text/html'});
      res.end(fs.readFileSync(__dirname + '/index.html', 'utf-8'));
  }
  else if ('/styles/main.css' == url) {
    res.writeHead(200, {'Content-Type' : 'text/css'});
    res.end(fs.readFileSync(__dirname + '/styles/main.css', 'utf-8'));
  }
  else if ('/scripts/config.js' == url) {
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    res.end(fs.readFileSync(__dirname + '/scripts/config.js', 'utf-8'));
  }
  else if ('/scripts/field.js' == url) {
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    res.end(fs.readFileSync(__dirname + '/scripts/field.js', 'utf-8'));
  }
  else if ('/scripts/input.js' == url) {
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    res.end(fs.readFileSync(__dirname + '/scripts/input.js', 'utf-8'));
  }
  else if ('/scripts/fieldController.js' == url) {
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    res.end(fs.readFileSync(__dirname + '/scripts/fieldController.js', 'utf-8'));
  }
  else if ('/scripts/render.js' == url) {
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    res.end(fs.readFileSync(__dirname + '/scripts/render.js', 'utf-8'));
  }*/

}).listen(3000);  // ポート競合の場合は値を変更

var io = socketio.listen(server);
//var css = require('./styles/main.css');
//var config = require('./scripts/config.js');
//var field = require('./scripts/field.js');

io.sockets.on('connection', function(socket) {
    socket.on('client_to_server', function(data) {
        io.sockets.emit('server_to_client', {value : data.value});
    });
});

var test0 = 0;
console.log('test');
