/**
 * This is the application entrypoint!
 */
import { dbRouter } from "./db/dbRouter";
const express = require('express');
const fs = require('fs');
const ejs = require('ejs');
const yaml = require('js-yaml');
require('dotenv').config();

export const app = express();

// Ingest config
const configTemplate = fs.readFileSync('config.yaml', 'utf8');
const configStr = ejs.render(configTemplate);
export const config = yaml.load(configStr, 'utf-8');
console.log('Starting server with config', config);

// Setup DB
export const nano = require('nano')(`http://${config.database.user.username}:${config.database.user.password}@${config.database.host}:${config.database.port}`);

// Attach routers
export const rootRouter = express.Router();
app.use('/', rootRouter);
app.use('/db', dbRouter);

// A test route
rootRouter.get('/', (req: any, res: any) => {
    res.send('Hello World!')
});

app.listen(config.app.port, config.app.host, () => {
    console.log(`Server listening on port ${config.app.port}`)
});