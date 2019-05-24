const express = require("express");
const morgan = require("morgan")
const server = express();

server.use(express.json(), morgan());

//sanity checker
server.get("/", async (req, res) => {
    res.status(200).json({ api: "up" });
  });

module.exports = server;