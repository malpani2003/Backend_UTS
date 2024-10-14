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

// Delete a slide
const deleteSlide = async (req, res) => {
  const { id } = req.params;

  try {
    const slide = await Slider.findByIdAndDelete(id);
    if (!slide) {
      return res.status(404).json({ error: 'Slide not found' });
    }
    res.status(200).json({ message: 'Slide deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete slide' });
  }
};

module.exports = { getSlides, addSlide, deleteSlide };
