const express = require("express");
const { generateShortUrl } = require("../controllers/urlShorten");
const auth = require("../middleware/auth");

const router = express.Router();

router.post("/", auth, generateShortUrl);

module.exports = router;
