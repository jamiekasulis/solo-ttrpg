/**
 * This is the application entrypoint!
 */
const express = require('express');

// @TODO Move this to config ingestion.
const port = 8080;

const app = express();

app.get('/', (req: any, res: any) => {
    res.send('Hello World!')
});

app.get('/test', (req: any, res: any) => {
    res.statusCode = 200;
    res.send('TEST');
});

// The host must be 0.0.0.0 to work with Docker. 
// See https://stackoverflow.com/questions/65721320/localhost-didn-t-send-any-data-err-empty-response-nodejs
app.listen(port, '0.0.0.0', () => {
    console.log(`Server listening on port ${port}`)
});