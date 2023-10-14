const ShortUrl = require("../models/ShortUrl");

const getShortUrl = async (req, res) => {
  try {
    const userId = req.userId; //  userId coming from auth middleware
    const { shortId } = req.params;

    const url = await ShortUrl.findOne({ shortId });
    if (url.ownerId != userId) {
      res.json({ success: false, error: "You are unauthorize to access." });
    } else {
      const { _id, shortId, name, redirectUrl, createdAt, analyticIds } = url;
      data = {
        _id,
        shortId,
        name,
        redirectUrl,
        createdAt,
        visited: analyticIds.length,
      };
      res.json({ success: true, data });
    }
  } catch (error) {
    res.json({ success: false, error });
  }
};

const getShortUrls = async (req, res) => {
  try {
    const userId = req.userId; //  userId coming from auth middleware
    const data = await ShortUrl.find({ ownerId: userId });
    const urls = data.map((item) => {
      const { _id, shortId, name, redirectUrl, createdAt, analyticIds } = item;
      return {
        _id,
        shortId,
        name,
        redirectUrl,
        createdAt,
        visited: analyticIds.length,
      };
    });

    res.json({ success: true, data: urls });
  } catch (error) {
    res.json({ success: false, error });
  }
};

module.exports = { getShortUrl, getShortUrls };
