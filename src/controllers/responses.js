const responsesRouter = require("express").Router();
const logger = require("../utils/logger");

const config = require("../utils/config");
const knex = require("knex")({
  client: "mysql",
  connection: {
    host: config.DB_HOST,
    port: config.DB_PORT,
    user: config.DB_USER,
    password: config.DB_PASSWORD,
    database: config.DB_NAME,
  },
});

responsesRouter.get("/", (req, res) => {
  logger.info("GET /api/responses");
  knex
    .from("responses")
    .select()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      logger.error(err);
      res.json(err);
    });
});

responsesRouter.post("/", async (req, res) => {
  const { surveyId, score, comment } = req.body;
  logger.info(
    `POST /api/responses body={surveyId:${surveyId}, score:${score}, comment:${comment}}`
  );
  const responseData = {
    survey_id: surveyId,
    score,
    comment,
  };
  try {
    const response = knex("responses").insert(responseData);
    res.json(response);
  } catch (err) {
    logger.error(err);
    res.json(err);
  }
});

module.exports = responsesRouter;
