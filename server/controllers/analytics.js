const Analytics = require("../models/Analytics");
const ShortUrl = require("../models/ShortUrl");

const analytics = async (req, res) => {
  try {
    const userId = req.userId; //  userId coming from auth middleware
    const { shortId } = req.params;
    const { ownerId, analyticIds } = await ShortUrl.findOne({shortId})
    if (userId != ownerId) {
      return res.status(401).json({ success: false, error: "You are unauthorize." })
    }
    const data = await Promise.all(analyticIds.map(async (id)=>{
      const analytic =  await Analytics.findById(id)
      return analytic
    }))
    res.status(200).json({success: true, data});
  } catch (error) {
    res.status(400).json({success: false, error})
  }
};

module.exports = { analytics };
