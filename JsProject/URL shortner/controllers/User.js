const { User } = require("../models/User");

async function handleUserSignUp(req, res) {
  const { name, email, password } = req.body;

  if(! await User.findOne({email}))
  await User.create({
    name,
    email,
    password,
  });
  res.status(201).render("home");
}

module.exports = {handleUserSignUp}; 
