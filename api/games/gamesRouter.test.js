const request = require("supertest");
const router = require("../server");
const db = require("../../data/dbConfig");

describe("gamesRouter.js", () => {
  beforeEach(async () => {
    await db("games").truncate();
  });
  describe("endpoints", () => {
    describe("GET/games", () => {
      it("should return 200 OK", async () => {
        await request(router)
          .get("/games")
          .set("Accept", "application/json")
          .expect(200);
      });
      it("should return JSON data", async () => {
        await request(router)
          .get("/games")
          .set("Accept", "application/json")
          .expect("Content-Type", /json/);
      });
      it("should be functional", async () => {
        await request(router)
          .get("/games")
          .set("Accept", "application/json")
          .expect({ message: "here you go", rows: [] });
      });
    });
    describe("Post/games", () => {
      it("should return json data", async () => {
        let data = {
          title: "Fortnight",
          genre: "Dancing",
          releaseYear: 2020
        };
        await request(router)
          .post("/games")
          .send(data)
          .set("Accept", "application/json")
          .expect("Content-Type", /json/);
      });
      it("should return 201 game data OK", async () => {
        let data = {
          title: "Fortnight",
          genre: "Dancing",
          releaseYear: 2020
        };
        await request(router)
          .post("/games")
          .send(data)
          .set("Accept", "application/json")
          .expect(201);
      });
      it("should return status code 422 and a message if no title", async () => {
        let data = {
          name: "Fortnight",
          genre: "Dancing",
          releaseYear: 2020
        };
        await request(router)
          .post("/games")
          .send(data)
          .set("Accept", "application/json")
          .expect(422, {message: "missing title to create game"});
      });
      it("should return status code 422 and a message if no title", async () => {
        let data = {
            title: "Fortnight",
            noGenre: "Dancing",
            releaseYear: 2020
          };
          await request(router)
            .post("/games")
            .send(data)
            .set("Accept", "application/json")
            .expect(422,{message: "missing genre to create game"});
      });
    });
  });
});
