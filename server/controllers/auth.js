require("dotenv").config();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const jwtSecret = process.env.JWT_SECRET;

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (await User.findOne({ email })) {
      return res.status(400).json({ error: "User already exist." });
    }
    bcrypt.genSalt(10, async (err, salt) => {
      bcrypt.hash(password, salt, async (err, hash) => {
        const user = await User.create({ name, email, password: hash });
        const token = jwt.sign(
          { user: user._id, iat: Math.floor(Date.now() / 1000) - 30 },
          jwtSecret
        );
        res.status(201).json({ name, email, token });
      });
    });
  } catch (error) {
    res.status(400).json({ error });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email })
    if (!user) {
      return res.status(400).json({ error: "Invalid credentials." });
    }
    bcrypt.compare(password, user.password, function(err, isCorrect) {
      if (err || !isCorrect) {
        return res.status(400).json({ error: "Invalid credentials." });
      }
      const token = jwt.sign(
        { user: user._id, iat: Math.floor(Date.now() / 1000) - 30 },
        jwtSecret
      );
      res.status(200).json({ name: user.name, email: user.email, token });
    });
    
  } catch (error) {
    res.status(400).json({ error });
  }
}

module.exports = {
  signup,
  login,
};
