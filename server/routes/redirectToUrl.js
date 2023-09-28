const express = require("express");
const { redirectToUrl } = require('../controllers/redirectToUrl');

const router = express.Router();

router.get("/:shortId", redirectToUrl);

module.exports = router;