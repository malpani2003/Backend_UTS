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

const homePageSchema = new mongoose.Schema(
  {
    aboutUs:{
        type:String
    },
    testimonials: [TestimonialSchema],
    services:[ServiceSchema],
  },
  { timestamps: true }
);

const homePage = mongoose.model("HomePage", homePageSchema);
module.exports = homePage;
