const router = require('express').Router();
const db = require('./gamesModel');

router.get('/', async (req, res) => {
    const rows = await db.getAll();
  res.status(200).json(rows);
  });

module.exports = router;