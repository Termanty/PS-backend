const usersRouter = require("express").Router();
const bcrypt = require("bcrypt");
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

usersRouter.get("/", (req, res) => {
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

usersRouter.post("/", async (req, res) => {
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

usersRouter.get("/:id/surveys", (req, res) => {
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

module.exports = usersRouter;
