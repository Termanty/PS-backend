"use strick";

const express = require("express");
const cors = require("cors");
const config = require("./utils/config");
const logger = require("./utils/logger");
const bcrypt = require("bcrypt");

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

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("hello happy net promoter score users");
});

app.get("/api/users", (req, res) => {
  logger.info("GET /api/users");
  knex
    .from("users")
    .select()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      logger.error(err);
      res.json(err);
    });
});

app.post("/api/users", async (req, res) => {
  const { name, email, password } = req.body;
  logger.info(
    `POST /api/users body={name:${name}, email:${email}, password:${password}}`
  );
  console.log(req.body);
  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);

  const userData = {
    name,
    email,
    password: passwordHash,
  };

  try {
    const user = await knex("users").insert(userData);
    res.json(user);
  } catch (err) {
    logger.error(err);
    res.json(err);
  }
});

app.get("/api/users/:id/surveys", (req, res) => {
  const userId = req.params.id;
  logger.info(`GET /api/users/${userId}/surveys`);
  knex
    .from("surveys")
    .select()
    .where("user_id", userId)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      logger.error(err);
      res.json(err);
    });
});

app.get("/api/surveys", (req, res) => {
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

app.get("/api/responses", (req, res) => {
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

app.post("/api/responses", async (req, res) => {
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

const port = config.PORT;
app.listen(port, () => {
  logger.info("App listening on port", port);
});
