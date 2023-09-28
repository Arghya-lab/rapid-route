const UrlMapping = require("../models/shortUrl");
const ShortUniqueId = require("short-unique-id");

const generateShortUrl = async (req, res) => {
  try {
    const uid = new ShortUniqueId({ length: 8 });
    const { url } = req.body;
    const userId = req.userId; //  userId coming from auth middleware
    const shortId = uid.rnd(); // generate 8 char uid
    await UrlMapping.create({ ownerId: userId, shortId, redirectUrl: url });
    res.json({ shortId });
  } catch (error) {
    res.status(400).json({ error: "Enter correct data" });
  }
};
module.exports = { generateShortUrl };
