var http = require('http');

var random = ((Math.random() * 10000) % 100) + 1;

http.createServer(function(req,res) {
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('Hello World! ' + parseInt(random));
}).listen(8080);
