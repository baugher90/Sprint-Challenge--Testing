const db = require('../../data/dbConfig');

module.exports = {
  insert,
};

async function insert(games) {
    const [id] = await db('games').insert(games,"id");
  return db('games').where({ id}).first();
}