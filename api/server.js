const express = require("express");
const morgan = require("morgan");
const gamesRouter = require("./games/gamesRouter")
const server = express();

server.use(express.json(), morgan());
server.use('/games', gamesRouter);

//sanity checker
server.get("/", async (req, res) => {
    res.status(200).json({ api: "up" });
  });

module.exports = server;