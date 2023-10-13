const ShortUrl = require("../models/ShortUrl");

const getShortUrls = async (req, res) => {
  try {
    const userId = req.userId; //  userId coming from auth middleware
    const data = await ShortUrl.find({ownerId: userId})
    const urls = data.map((item)=>{
      const { _id, shortId, name, redirectUrl, createdAt, analyticIds } = item
      return { _id, shortId, name, redirectUrl, createdAt, visited: analyticIds.length }
    })

    res.json({success: true, data: urls});
  } catch (error) {
    res.json({success: false, error});
  }
};

module.exports = { getShortUrls };
