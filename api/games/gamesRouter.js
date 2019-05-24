const router = require("express").Router();
const db = require("./gamesModel");

router.get("/", async (req, res) => {
  const rows = await db.getAll();
  res.status(200).json({ message: "here you go", rows });
});

router.post("/", async (req, res) => {
  const game = await db.insert(req.body);
  res.status(201).json(game);
});

module.exports = router;
