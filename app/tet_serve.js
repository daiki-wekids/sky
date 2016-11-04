var http = require('http');
var fs = require('fs');

var server = http.createServer();
server.on('request', getJs);
server.listen(8080);
console.log('Server running ...');

function getJs(req, res) {
    var url = req.url;
console.log(url);
    if ('/' == url) {
        fs.readFile('./test.html', 'UTF-8', function (err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });
    } else if ('/test.js' == url) {
        fs.readFile('./test.js', 'UTF-8', function (err, data) {
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.write(data);
            res.end();
        });
    } else if ('/styles/test.css' == url) {
        fs.readFile('./styles/test.css', 'UTF-8', function (err, data) {
            res.writeHead(200, {'Content-Type': 'text/css'});
            res.write(data);
            res.end();
        });
    }
}
