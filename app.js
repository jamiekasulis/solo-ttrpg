const http = require('http');
const { Table } = require('./src/tables/table');

const hostname = '127.0.0.1';
const port = 3000;

// The function http.createServer() creates and returns an HTTP server.
// See https://nodejs.org/api/http.html#httpcreateserveroptions-requestlistener
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Welcome to SOLO-TTRPG');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
    const testTable = new Table('./tables/names.csv');
});