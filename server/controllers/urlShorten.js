const ShortUrl = require("../models/ShortUrl");
const ShortUniqueId = require("short-unique-id");

const generateShortUrl = async (req, res) => {
  try {
    const uid = new ShortUniqueId({ length: 8 });
    const { name, url } = req.body;
    const userId = req.userId; //  userId coming from auth middleware
    const shortId = uid.rnd(); // generate 8 char uid
    await ShortUrl.create({ ownerId: userId, shortId, name, redirectUrl: url });
    res.status(200).json({ success: true, shortId });
  } catch (error) {
    res.status(400).json({ success: false, error: "Enter correct data" });
  }
};
module.exports = { generateShortUrl };
