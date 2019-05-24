const db = require('../../data/dbConfig');

module.exports = {
  insert,
  getAll,
  findById,
  update,
  remove,
};

async function insert(games) {
    const [id] = await db('games').insert(games,"id");
  return db('games').where({ id}).first();
}

function getAll() {
    return db('games');
}

function findById(id) {
    return db('games')
    .select( 'id', 'title', 'genre', 'releaseYear', )
    .where({ id })
    .first();
}

async function update(id, changes) {
    return db('games')
    .where({ id })
    .update(changes, '*');
}

function remove(id) {
    return db('games')
    .where({ id })
    .del();
}