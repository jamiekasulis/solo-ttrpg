# syntax=docker/dockerfile:1

# Base image
FROM node:latest

WORKDIR /src

# Install dependencies
COPY package.json ./
RUN npm install

COPY . .

# Run the node application
CMD ["npm", "start"]

EXPOSE 3000