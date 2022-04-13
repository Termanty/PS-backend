const supertest = require("supertest");
const createServer = require("./testServer");

const api = supertest(createServer());

describe("/api/responses", () => {
  test("should return 200 and appliction/json", async () => {
    await api
      .get("/api/responses")
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });
});

afterAll(() => {});
