const supertest = require("supertest");
const createServer = require("./testServer");

const api = supertest(createServer());

describe("/api/surveys", () => {
  it("should return 200 and appliction/json", async () => {
    await api
      .get("/api/surveys")
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });
});

describe("/api/surveys/:id/responses", () => {
  const survey_id = "6a3734d0-4499-4dd7-aa06-94a1f8c6f21e";

  it("should return 200 and appliction/json", async () => {
    await api
      .get(`/api/surveys/${survey_id}/responses`)
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });
});

afterAll(() => {});
