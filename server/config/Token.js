const jwt = require("jsonwebtoken");

module.exports.AccessToken = async (payload) => {
  return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "30m",
  });
};

module.exports.RefreshToken = async (payload) => {
  return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "30d",
  });
};

module.exports.Otp = async () => {
  return Math.floor(100000 + Math.random() * 900000);
};
