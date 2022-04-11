"use strick";

const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
require("dotenv").config();

const knex = require("knex")({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("hello happy net promoter score users");
});

app.get("/users", (req, res) =>
  knex
    .from("users")
    .select()
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    })
);

app.post("/users", async (req, res) => {
  const { name, email, password } = req.body;
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
    console.log(err);
    res.json(err);
  }
});

app.get("/users/:id/surveys", (req, res) => {
  const userId = req.params.id;
  knex
    .from("surveys")
    .select()
    .where("user_id", userId)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.get("/surveys", (req, res) =>
  knex
    .from("surveys")
    .select()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    })
);

app.get("/responses", (req, res) =>
  knex
    .from("responses")
    .select()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    })
);

app.post("/responses", (req, res) => {
  const { surveyId, score, comment } = req.body;
  console.log("post response");
  console.log(req.body);
  const responseData = {
    survey_id: surveyId,
    score,
    comment,
  };
  knex("responses")
    .insert(responseData)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

const port = process.env.APP_PORT;
app.listen(port, () => {
  console.log("App listening on port", port);
});
