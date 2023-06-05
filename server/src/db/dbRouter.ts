import { app } from '../index';
import { GetDb } from './database';
const express = require('express');

export const dbRouter = express.Router();

dbRouter.get('/', async (req: any, res: any) => {
    const result = (await GetDb()).insert({ message: 'This is a test insertion'});
    res.statusCode = 200;
    res.send(result);
});