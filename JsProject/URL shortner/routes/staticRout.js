const express = require("express");
const router = express.Router();
const { URL } = require("../models/URL");

router.get("/", async (req, res) => {
  const allurl = await URL.find({});
  res.render("home", { urls: allurl });
});

router.get('/signup' ,(req,res)=>{
  res.render('signup');
})

module.exports = router;
