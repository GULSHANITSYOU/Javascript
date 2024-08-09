const express = require("express");
const users = require("./userData.json");
const { log} = require("console");
const { default: mongoose } = require("mongoose");
const UserRoutes = require('./routes/users'); 
const { connectMongoDB } = require('./conection');

const app = express();
const PORT = 3000;


connectMongoDB("mongodb://127.0.0.1:27017/gulshandb");





app.use(express.urlencoded({ extended: false }));

app.use(_, res, next) => {
  res.username = "Gulshan kumar";
  res.setHeader("x-your-last-name", "kumar");

  log("i  am midlware 1 and  i made the username in request ");
  next();
});

app.use((req, res, next) => {
  log("I am middleware 2");
  log("I got the user name " + res.username);
  log(req.headers);

  next();
});

app.use("/user",UserRoutes); 

app.listen(PORT, () => console.log(`server started at PORT: ${PORT}`));
