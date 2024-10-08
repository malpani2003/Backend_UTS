const mongoose = require("mongoose");

const aboutPageSchema = new mongoose.Schema({
  shortDescription: { type: String, required: true },
  detailDescription: { type: String, required: true },
  highlightPoints: [{ type: String }],
  overview: { type: String, required: true }, 
  mission: {
    text: { type: String, required: true },
    image: { type: String, required: true },
  },
  vision: {
    text: { type: String, required: true },
    image: { type: String, required: true },
  },
  lastUpdated: { type: Date, default: Date.now },
});

module.exports = mongoose.model("AboutPage", aboutPageSchema);
