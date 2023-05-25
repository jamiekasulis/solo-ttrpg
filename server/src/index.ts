/**
 * This is the application entrypoint!
 */
import http from 'http';
import Random from './random/random';

const hostname = '127.0.0.1';
const port = 8080;

// The function http.createServer() creates and returns an HTTP server.
// See https://nodejs.org/api/http.html#httpcreateserveroptions-requestlistener
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(Random.getRandomInt(10).toString());
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});