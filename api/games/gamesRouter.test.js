const request = require("supertest");
const router = require("../server");

describe("gamesRouter.js", () => {
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
    });
  });
});
