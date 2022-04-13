const supertest = require("supertest");
const createServer = require("./testServer");

const api = supertest(createServer());

describe("/api/users", () => {
  it("should return 200 and appliction/json", async () => {
    await api
      .get("/api/users")
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });
});

describe("/api/users/:id/surveys", () => {
  const user_id = "531b286f-1307-4c3b-8f7b-95ca95445428";

  it("should return 200 and appliction/json", async () => {
    await api
      .get(`/api/users/${user_id}/surveys`)
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });
});

afterAll(() => {});
