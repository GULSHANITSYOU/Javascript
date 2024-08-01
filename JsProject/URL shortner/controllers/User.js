const { User } = require("../models/User");

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

  return user ? res.redirect("/") : res.render("login",{error:"Invalid user email or password"});
}

module.exports = { handleUserSignUp, handleUserLogin };
