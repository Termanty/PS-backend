const supertest = require("supertest");
const createServer = require("./testServer");

const api = supertest(createServer());

test("responses are returned as json", async () => {
  await api
    .get("/api/surveys")
    .expect(200)
    .expect("Content-Type", /application\/json/);
});

afterAll(() => {});
