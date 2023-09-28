const ShortUrl = require("../models/shortUrl")
const Analytics = require("../models/Analytics");

const redirectToUrl = async (req, res) => {
  try {
    const { shortId } = req.params
    const ipAddress = req.ip; // Client's IP address
    const userAgent = req.headers['user-agent']; // User agent string
    const referer = req.headers.referer || req.headers.referrer; // Referer header

    const { _id } = await Analytics.create({ shortId, ipAddress, userAgent, referer })
    await ShortUrl.updateOne({shortId}, {$push: {analyticIds: _id}})
    const { redirectUrl } = await ShortUrl.findOne({shortId})
    res.redirect(redirectUrl)
  } catch (error) {
    res.status(400).send("Some thing went wrong")
    console.log(error);
  }
}

module.exports = { redirectToUrl, }