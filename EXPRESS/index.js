const express = require("express");
const { log } = require("console");

const app = express();
const PORT = 3000; 





app.listen(PORT, () => log("server started !"));
