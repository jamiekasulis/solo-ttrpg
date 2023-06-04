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

app.listen(port, '0.0.0.0', () => {
    console.log(`Server listening on port ${port}`)
});