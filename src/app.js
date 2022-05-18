"use strick";

const express = require("express");
const cors = require("cors");
const usersRouter = require("./controllers/users");
const surveysRouter = require("./controllers/surveys");
const responsesRouter = require("./controllers/responses");
const config = require("./utils/config");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("hello happy net promoter score users");
});

app.use("/users", usersRouter);
app.use("/surveys", surveysRouter);
app.use("/responses", responsesRouter);

const port = config.PORT;

module.exports = app;
