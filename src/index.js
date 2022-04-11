"use strick";

const express = require("express");
const cors = require("cors");
const usersRouter = require("./controllers/users");
const surveysRouter = require("./controllers/surveys");
const responsesRouter = require("./controllers/responses");
const config = require("./utils/config");
const logger = require("./utils/logger");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("hello happy net promoter score users");
});

app.use("/api/users", usersRouter);
app.use("/api/surveys", surveysRouter);
app.use("/api/responses", responsesRouter);

const port = config.PORT;
app.listen(port, () => {
  logger.info("App listening on port", port);
});
