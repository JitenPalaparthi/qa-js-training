const http = require('http');

const hostname = '127.0.0.1';// This is accessable only through to loop back interface 
//const hostname = '0.0.0.0';// this runs on all interfaces ..
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});