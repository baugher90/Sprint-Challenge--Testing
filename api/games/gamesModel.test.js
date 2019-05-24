const db = require("../../data/dbConfig");
const Games = require("./gamesModel");

describe("gamesModel", () => {
  beforeEach(async () => {
    await db("games").truncate();
  });
  describe("insert()", () => {
    it("should insert the provided games into the db", async () => {
        const newGame = await Games.insert({ 
            title: "Fortnight",
            genre: "Dancing",
            releaseYear: 2020,
        });

        const games = await db('games');
        expect(games[0]).toEqual(newGame);
    });
  });
  describe("getAll()", () => {
    beforeEach(async () => {
      await db("games").truncate();
    });
    it("should get all games in the database", async () => {
        await Games.insert({ 
            title: "Fortnight",
            genre: "Dancing",
            releaseYear: 2020,
        });
        const database = await db("games");
        const getAll = await Games.getAll('games');
        expect(getAll).toEqual(database);
    })
  });
  describe("findById()", () => {
    beforeEach(async () => {
      await db("games").truncate();
    });
    it("should find the game with the given id", async () => {
        const game = await Games.insert({ 
            title: "Fortnight",
            genre: "Dancing",
            releaseYear: 2020,
        });
        const findById = await Games.findById(game.id);
        expect(findById).toEqual(game);
    })
  });
});
