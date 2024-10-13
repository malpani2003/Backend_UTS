const Internship = require("../models/internshipModel");

const getAllInternships = async (req, res) => {
  try {
    const internships = await Internship.find();
    res.status(200).json({
      status: "success",
      data: internships,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

const createInternship = async (req, res) => {
  try {
    const newInternship = await Internship.create(req.body);
    res.status(201).json({
      status: "success",
      data: newInternship,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

const updateInternship = async (req, res) => {

  try {
    console.log(req.params,req.body);
    const updatedInternship = await Internship.findByIdAndUpdate(
      req.params.id, 
      req.body, 
      { new: true } 
    );

    if (!updatedInternship) {
      return res.status(404).json({
        status: "fail",
        message: "Internship not found",
      });
    }

    res.status(200).json({
      status: "success",
      data: updatedInternship,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

const deleteInternship = async (req, res) => {
  try {
    const internship = await Internship.findByIdAndDelete(req.params.id);
    if (!internship) {
      return res.status(404).json({
        status: "fail",
        message: "Internship not found",
      });
    }
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

module.exports = {
  getAllInternships,
  deleteInternship,
  createInternship,
  updateInternship
};
