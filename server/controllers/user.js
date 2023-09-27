const bcrypt = require('bcryptjs');
const User = require("../models/User");

const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body
    // if (await User.find({email})) {
    //   res.status(400).json({error: "User already exist."})
    // }
    bcrypt.genSalt(10, async(err, salt) => {
      bcrypt.hash(password, salt, async(err, hash) => {
          // Store hash in your password DB.
          await User.create({ name, email, password: hash })
          res.status(201).json({name, email})
      });
  });
  } catch (error) {
    res.status(400).json({error})
  }
};

module.exports = {
  createUser,
};
