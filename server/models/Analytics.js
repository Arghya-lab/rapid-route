const mongoose = require('mongoose');

const analyticsSchema = new mongoose.Schema({
  ownerId: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  shortId: {
    type: String,
    required: true
  },
  ipAddress: String,
  userAgent: String,
  referer: String,
  timestamp: {
    type: Date,
    default: Date.now
  }
});

const Analytics = mongoose.model('Analytics', analyticsSchema);

module.exports = Analytics;
