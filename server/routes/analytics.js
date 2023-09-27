const express = require("express");
const { analytics } = require("../controllers/analytics");

const router = express.Router();

router.post("/:shortId", analytics);

module.exports = router;
