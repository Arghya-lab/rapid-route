require("dotenv").config();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const jwtSecret = process.env.JWT_SECRET;

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (await User.findOne({ email })) {
      return res.status(400).json({ success: false, error: "User already exist." });
    }
    bcrypt.genSalt(10, async (err, salt) => {
      bcrypt.hash(password, salt, async (err, hash) => {
        const user = await User.create({ name, email, password: hash });
        const token = jwt.sign(
          { userId: user._id, iat: Math.floor(Date.now() / 1000) - 30 },
          jwtSecret
        );
        res.status(201).json({ success: true, data: { name, email, token: `Bearer ${token}` }});
      });
    });
  } catch (error) {
    res.status(400).json({ success: false, error });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ success: false, error: "Invalid credentials." });
    }
    bcrypt.compare(password, user.password, function (err, isCorrect) {
      if (err || !isCorrect) {
        return res.status(401).json({ success: false, error: "Invalid credentials." });
      }
      const token = jwt.sign(
        { userId: user._id, iat: Math.floor(Date.now() / 1000) - 30 },
        jwtSecret
      );
      res.status(200).json({ success: true, data: { name: user.name, email: user.email, token: `Bearer ${token}` }});
    });
  } catch (error) {
    res.status(400).json({ success: false, error });
  }
};

module.exports = {
  signup,
  login,
};
