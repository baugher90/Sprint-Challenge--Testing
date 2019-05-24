const router = require('express').Router();
const db = require('./gamesModel');

router.get('/', async (req, res) => {
    const rows = await db.getAll();
  res.status(200).json({message:"here you go", rows});
  });

module.exports = router;