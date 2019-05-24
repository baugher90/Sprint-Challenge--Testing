const request = require("supertest");
const server = require('../server');

describe("gamesRouter.js", () => {
    describe("endpoints", () => {
        describe("GET/games", () => {
            it("should return 200 OK", async () => {
                const res = await request(server).get("/games");
                expect(res.status).toBe(200)
              });
        })
    })
})