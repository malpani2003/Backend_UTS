const mongoose = require("mongoose");

const ServiceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String },
});

const TestimonialSchema = new mongoose.Schema({
  text: { type: String, required: true },
  shortDescription: { type: String, required: true },
  imageURL: { type: String },
});

const moreServiceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String },
});

const socialMediaLinkSchema = new mongoose.Schema({
  facebook: { type: String },
  twitter: { type: String },
  linkedin: { type: String },
  pinterest: { type: String },
});

const WebPageSchema = new mongoose.Schema(
  {
    services: [ServiceSchema],
    testimonials: [TestimonialSchema],
    moreServices: [moreServiceSchema],
    socialLinks: socialMediaLinkSchema,
  },
  { timestamps: true }
);

const WebPage = mongoose.model("WebPage", WebPageSchema);
module.exports = WebPage;
