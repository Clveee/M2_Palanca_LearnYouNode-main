const http = require('http');
const map = require('through2-map');

const port = process.argv[2];

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    let body = '';
    
    req.on('data', (chunk) => {
      body += chunk;
    });
    
    req.on('end', () => {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(body.toUpperCase());
    });
  } else {
    res.statusCode = 405;
    res.end();
  }
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
