# About this Project
This application is going to be a tool to help your solo TTRPG adventures go more smoothly!

# Developer Guide

## Project structure
This project was initialized and set up following [this guide from HowToGraphQL](https://www.howtographql.com/typescript-helix/1-project-setup/). It is a Typescript project using ES2016 syntax ('import' rather than 'require'). 

### Notes on configuration
- The project uses ts-node and ts-node-dev to run .ts files directly, without needing to first transpile them into javascript
- The app entrypoint is src/index.ts, as defined in package.json

### Files
- `package.json` was created via `npm init`, which set up the scaffolding for the empty project. This is where we track which NPM packages and versions the project is using. It gets automatically updated upon using `npm install`
- `tsconfig.json` configures typescript for the project,

### Tools
- NPM - Node Package Manager. Install packages with this
- NPX - A tool for executing node packages
- Jest - for unit testing

## Running the app

Run `npm start` from either `client/` or `server/`.

Then navigate to http://localhost:3000 for the client or http://localhost:8080 for server.

# Feature wishlist

## Group 1

For now, I want to just automate the features available in most solo TTRPG books, which revolve around random generation:
- Be able to roll dice and see the result
- Be able to translate from the dice roll to a result from a RNG table (i.e. Get a random NPC name, get an aspect, etc)

## Group 2

Be able to record the journey in a log:
- Provide a text editor for the user to write their journey in
- Persist this data
