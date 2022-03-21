"use strick";

const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.APP_PORT;

app.get("/", (req, res) => {
  res.send("hello happy net promoter score users");
});

app.listen(port, () => {
  console.log("App listening on port", port);
});
