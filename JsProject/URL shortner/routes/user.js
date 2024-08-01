const express = require("express");
const { handleUserSignUp } = require("../controllers/User");

const router = express.Router();

router.post("/", handleUserSignUp);

module.exports = router;
