const { getUser } = require("../services/auth");

async function restrictToLoggedinOnly(req, res, next) {
  const uuid = req?.cookies?.uuid;

  if (!uuid) return res.redirect("/login");

  const user = getUser(uuid);
  if (!user) return res.redirect("/login");

  req.user = user;
  next();
}

async function checkAuth(req, res, next) {
  const uuid = req?.cookies?.uuid;

  const user = getUser(uuid);

  req.user = user;
  next();
}

module.exports = { restrictToLoggedinOnly, checkAuth };
