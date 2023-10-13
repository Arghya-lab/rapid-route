const ShortUrl = require("../models/ShortUrl");

const getShortUrls = async (req, res) => {
  try {
    const userId = req.userId; //  userId coming from auth middleware
    const data = await ShortUrl.find({ownerId: userId})
    const urls = data.map((item)=>{
      const { _id, shortId, redirectUrl, createdAt, analyticIds } = item
      return { _id, shortId, redirectUrl, createdAt, visited: analyticIds.length }
    })

    res.json({success: true, urls});
  } catch (error) {
    res.json({success: false, error});
  }
};

module.exports = { getShortUrls };
