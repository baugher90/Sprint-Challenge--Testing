const request = require("supertest");
const router = require('../server');

describe("gamesRouter.js", () => {
    describe("endpoints", () => {
        describe("GET/games", () => {
            it("should return 200 OK", async () => {
                await request(router).get("/games")
                .set('Accept', 'application/json')
                .expect(200);
              });
            it("should return JSON data", async () => {
                await request(router).get("/games")
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
            })
        })
    })
})