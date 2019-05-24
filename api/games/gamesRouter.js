const router = require("express").Router();
const db = require("./gamesModel");

router.get("/", async (req, res) => {
  const rows = await db.getAll();
  res.status(200).json({ message: "here you go", rows });
});

router.post("/", async (req, res) => {
    let {genre, title} = req.body;
    if (req.body && genre && title) {
        const game = await db.insert(req.body);
        res.status(201).json(game);
      } else if (!genre) {
        res.status(422).json({
          message: "missing genre to create game"
        });
      } else if (!title) {
        res.status(422).json({
          message: "missing title to create game"
        });
      } else {
          res.status(500).json({message: "hhhmmm seems to be an internal error somewhere"})
      }
  });

module.exports = router;
