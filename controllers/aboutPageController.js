const AboutPage = require("../models/aboutPageModel");

const getAboutPage = async (req, res) => {
  try {
    const data = await AboutPage.findOne();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: "Error retrieving data", error: err });
  }
};

const createAboutPage = async (req, res) => {
  try {
    const newAboutPage = new AboutPage(req.body);
    const savedData = await newAboutPage.save();
    res.status(201).json(savedData);
  } catch (err) {
    res.status(500).json({ message: "Error creating data", error: err });
  }
};

const updateAboutPage = async (req, res) => {
  try {
    const updatedData = await AboutPage.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedData);
  } catch (err) {
    res.status(500).json({ message: "Error updating data", error: err });
  }
};

const deleteAboutPage = async (req, res) => {
  try {
    await AboutPage.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Data deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting data", error: err });
  }
};

module.exports = {
  getAboutPage,
  updateAboutPage,
  deleteAboutPage,
  createAboutPage,
};
