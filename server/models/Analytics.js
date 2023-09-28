const mongoose = require('mongoose');

const analyticsSchema = new mongoose.Schema({
  shortId: {
    type: String,
    required: true
  },
  ipAddress: String,
  userAgent: String,
  timestamp: {
    type: Date,
    default: Date.now
  }
});

const Analytics = mongoose.model('Analytics', analyticsSchema);

module.exports = Analytics;
