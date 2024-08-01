const { User } = require("../models/User");
const { v4: uuidv4 } = require("uuid");
const {setUser} = require('../services/auth');

async function handleUserSignUp(req, res) {
  const { name, email, password } = req.body;

  if (!(await User.findOne({ email })))
    await User.create({
      name,
      email,
      password,
    });
  res.status(201).render("home", { signedup: true });
}

async function handleUserLogin(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });

  if (!user) {
    return res.render("login", { error: "Invalid user email or password" });
  }

  const sessionId = uuidv4();
  setUser(sessionId,user);
  res.cookie('uuid',sessionId);

  console.log(sessionId,user);

  return res.redirect("/");
}

module.exports = { handleUserSignUp, handleUserLogin };
