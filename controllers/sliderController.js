const Slider = require('../models/sliderModel');

// add a new slide
const addSlide = async (req, res) => {
  const { imageUrl, heading, subheading, buttonText, buttonLink } = req.body;

  try {
    const newSlide = new Slider({
      imageUrl,
      heading,
      subheading,
      buttonText,
      buttonLink
    });
    await newSlide.save();
    res.status(200).json({ message: 'Slide added successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add slide' });
  }
};

//  get all slides
const getSlides = async (req, res) => {
  try {
    const slides = await Slider.find();
    res.status(200).json(slides);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch slides' });
  }
};


module.exports={getSlides,addSlide};