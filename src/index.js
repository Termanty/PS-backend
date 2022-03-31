"use strick";

const express = require("express");
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
const port = process.env.APP_PORT;

app.get("/", (req, res) => {
  res.send("hello happy net promoter score users");
});

app.get("/users", (req, res) =>
  knex
    .from("users")
    .select()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    })
);

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

app.listen(port, () => {
  console.log("App listening on port", port);
});
