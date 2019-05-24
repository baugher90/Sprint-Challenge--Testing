const express = require("express");
const morgan = require("morgan")
const server = express();

server.use(express.json(), morgan());

module.exports = server;