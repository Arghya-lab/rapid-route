const Analytics = require("../models/Analytics");

require("dotenv").config();

const putAnalytics = async (req, res, next) => {
  try {
    const ipAddress = req.ip; // Client's IP address
    const userAgent = req.headers['user-agent']; // User agent string
    const referer = req.headers.referer || req.headers.referrer; // Referer header
    console.log(ipAddress, userAgent, referer);
    const { _id } = await Analytics.create({})

  } catch (error) {
    res.status(400).send("Some thing went wrong");
  }
};

module.exports = putAnalytics;
