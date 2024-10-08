const mongoose = require('mongoose');

const sliderSchema = new mongoose.Schema({
  imageUrl: {
    type: String,
    required: true
  },
  heading: {
    type: String,
    required: true
  },
  subheading: {
    type: String,
    required: true
  },
  buttonText: {
    type: String,
    required: true
  },
  buttonLink: {
    type: String,
    required: true
  }
},{timestamps:true});

const Slider=mongoose.model('Slider', sliderSchema);

module.exports = Slider;
