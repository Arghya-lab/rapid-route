const express = require("express");
const { redirectToUrl } = require('../controllers/redirectToUrl');
const auth = require("../middleware/auth");

const router = express.Router();

router.post("/:shortId", auth, redirectToUrl);

module.exports = router;