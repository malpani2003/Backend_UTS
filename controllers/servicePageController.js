const Service = require("../models/serviceModel"); // Import the model

// inserting a new WebPage document
const createWebPage = async (req, res) => {
  const { services, testimonials, moreServices } = req.body;

  try {
    const newWebPage = new Service({
      services,
      testimonials,
      moreServices,
    });

    const savedWebPage = await newWebPage.save();
    res
      .status(201)
      .json({ message: "WebPage created successfully", data: savedWebPage });
  } catch (error) {
    res.status(500).json({ message: "Error creating WebPage", error });
  }
};

// update a specific WebPage by ID
const updateWebPage = async (req, res) => {
  const webPageId = req.params.id;
  const updateData = req.body;

  try {
    const updatedWebPage = await Service.findByIdAndUpdate(
      webPageId,
      updateData,
      { new: true }
    );
    if (updatedWebPage) {
      res
        .status(200)
        .json({
          message: "WebPage updated successfully",
          data: updatedWebPage,
        });
    } else {
      res.status(404).json({ message: "WebPage not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error updating WebPage", error });
  }
};

// get all WebPage documents
const getAllWebPages = async (req, res) => {
  try {
    const webPages = await Service.find();
    res.status(200).json(webPages);
  } catch (error) {
    res.status(500).json({ message: "Error fetching WebPages", error });
  }
};

// get a single WebPage by ID
const getWebPageById = async (req, res) => {
  const webPageId = req.params.id;

  try {
    const webPage = await Service.findById(webPageId);
    if (webPage) {
      res.status(200).json(webPage);
    } else {
      res.status(404).json({ message: "WebPage not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error fetching WebPage", error });
  }
};

module.exports = {
  getAllWebPages,
  getWebPageById,
  createWebPage,
  updateWebPage,
};
