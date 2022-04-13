const surveysRouter = require("express").Router();
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

surveysRouter.get("/", (req, res) => {
  logger.info("GET /api/surveys");
  knex
    .from("surveys")
    .select()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      logger.error(err);
      res.json(err);
    });
});

surveysRouter.get("/:id/responses", (req, res) => {
  const survey_id = req.params.id;
  logger.info(`GET /api/surveys/${survey_id}/responses`);
  knex
    .from("responses")
    .select()
    .where("survey_id", survey_id)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      logger.error(err);
      res.json(err);
    });
});

module.exports = surveysRouter;
