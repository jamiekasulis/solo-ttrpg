# About this project
This is an application that allows you to play TTRPGs solo.

# Developer guide

## Running the app
To run the sever from your terminal, enter `node app.js` from the project's root. Then navigate to http://localhost:3000

## Layout of files
- `package.json` was created via `npm init`, which set up the scaffolding for the empty project. This is where we track which NPM packages and versions the project is using. It gets automatically updated upon using `npm install`

# Feature wishlist

## Group 1

For now, I want to just automate the features available in most solo TTRPG books, which revolve around random generation:
- Be able to roll dice and see the result
- Be able to translate from the dice roll to a result from a RNG table (i.e. Get a random NPC name, get an aspect, etc)

## Group 2

Be able to record the journey in a log:
- Provide a text editor for the user to write their journey in
- Persist this data
