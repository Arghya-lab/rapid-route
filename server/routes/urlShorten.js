const express = require("express");
const { generateShortUrl } = require("../controllers/urlShorten");
const getUser = require("../middleware/auth");

const router = express.Router();

router.post("/", getUser, generateShortUrl);

module.exports = router;
