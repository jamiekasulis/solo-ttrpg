/**
 * This is the application entrypoint!
 */
const express = require('express');
const fs = require('fs');
const ejs = require('ejs');
const yaml = require('js-yaml');
require('dotenv').config();

const configTemplate = fs.readFileSync('config.yaml', 'utf8');
const configStr = ejs.render(configTemplate);

const config = yaml.load(configStr, 'utf-8');
console.log('Starting server with config', config);

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
app.listen(config.port, config.host, () => {
    console.log(`Server listening on port ${config.port}`)
});