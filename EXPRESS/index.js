const express = require("express");
const { log } = require("console");

const app = express();

app.get("/", (req, res) => {
  return res.end("Home");
});

app.get("/About", (req, res) => res.end("About " + req.query.user));



app.listen(3000, () => log("server started !"));
