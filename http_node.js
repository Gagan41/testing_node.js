import http from 'node:http';

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end('Hello world!');
  }

  if (req.url === '/api/gagan') {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify([1, 2, 3]));
  }
});

server.listen(3005);
console.log("listening on port 3005");
