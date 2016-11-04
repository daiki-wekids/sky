var http = require('http');
var fs = require('fs');

var server = http.createServer();
server.on('request', getJs);
server.listen(3000);
console.log('Server running ...');

function getJs(req, res) {
    var url = req.url;
console.log(url);
    if ('/' == url) {
        fs.readFile('./index.html', 'UTF-8', function (err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });
    } else if ('/styles/main.css' == url) {
        fs.readFile('./styles/main.css', 'UTF-8', function (err, data) {
            res.writeHead(200, {'Content-Type': 'text/css'});
            res.write(data);
            res.end();
        });
    }
}
