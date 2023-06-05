const fs = require('fs');
const ejs = require('ejs');
const yaml = require('js-yaml');
require('dotenv').config();

console.log("We're running DB 8)");

const configTemplate = fs.readFileSync('config.yaml', 'utf8');
const configStr = ejs.render(configTemplate);

try {
    const config = yaml.load(configStr, 'utf-8');
    // @TODO Obscure user.password in the following log statement
    console.log('Starting DB with config', config);
} catch (e) {
    console.log(e);
}