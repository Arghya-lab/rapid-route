const mongoose = require("mongoose");

const urlMappingSchema = new mongoose.Schema(
  {
    ownerId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    shortId: {
      type: String,
      required: true,
      unique: true,
    },
    redirectUrl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const UrlMapping = mongoose.model("UrlMapping", urlMappingSchema);

module.exports = UrlMapping;
