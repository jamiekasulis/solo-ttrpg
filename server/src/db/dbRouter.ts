import { app, db } from '../index';
const express = require('express');

export const dbRouter = express.Router();

dbRouter.get('/test-insert', (req: any, res: any) => {
    const result = db.insert({ message: 'This is a test insertion'});
    res.statusCode = 200;
    res.send(result);
});