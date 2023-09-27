const UrlMapping = require("../models/UrlMapping")

const redirectToUrl = async (req, res) => {
  try {
    const { shortId } = req.params
    const { redirectUrl } = await UrlMapping.findOne({shortId})
    res.redirect(redirectUrl)
  } catch (error) {
    res.status(400).send("Some thing went wrong")
  }
}

module.exports = { redirectToUrl, }