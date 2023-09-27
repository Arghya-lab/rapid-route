require("dotenv").config();
const jwt = require("jsonwebtoken");

const jwtSecret = process.env.JWT_SECRET;

const auth = (req, res, next) => {
  try {
    const authorization = req.header("Authorization");
    const token = authorization.split("Bearer ")[1];
    if (!token) {
      return res
        .status(401)
        .send({ error: "Please authenticate using a valid token" });
    }
    jwt.verify(token, jwtSecret, function (err, decoded) {
      const userId = decoded.userId;
      req.userId = userId;
      next();
    });
  } catch (error) {
    res.status(401).send({ error: "Please authenticate using a valid token" });
  }
};

module.exports = auth;
