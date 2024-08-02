const jwt = require("jsonwebtoken");
const secert = "Gulsh@n20++";

function setUser(user) {
  try {
    return jwt.sign(
      {
        _id: user._id,
      },
      secert
    );
  } catch (error) {
    return null;
  }
}

function getUser(token) {
  if (!token) return null;
  return jwt.verify(token, secert);
}

module.exports = { setUser, getUser };
