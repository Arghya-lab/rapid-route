const Analytics = require("../models/Analytics");
const ShortUrl = require("../models/ShortUrl");

const analytics = async (req, res) => {
  try {
    const userId = req.userId; //  userId coming from auth middleware
    const { shortId } = req.params;
    const { ownerId, analyticIds } = await ShortUrl.findOne({shortId})
    if (userId != ownerId) {
      return res.status(400).json({ success: false, error: "You are unauthorize." })
    }
    const analytics = await Promise.all(analyticIds.map(async (id)=>{
      const analytic =  await Analytics.findById(id)
      return analytic
    }))
    res.json({success: true, analytics});
  } catch (error) {

  }
};

module.exports = { analytics };
