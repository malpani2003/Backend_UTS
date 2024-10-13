const Testimonial = require("../models/testimonialModel");
const cloudinary = require("../config/cloudinaryConfig");

const createTestimonial = async (req, res) => {
  try {
    const { name, position, message } = req.body;

    const file = req.file; // Get the uploaded file
    if (!file) {
      return res.status(400).json({
        status: "fail",
        message: "No file uploaded",
      });
    }

    // Upload to Cloudinary
    const cloudinaryResult = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            folder: "UTS_testimonial_Images", // Adjust folder name as needed
            allowed_formats: ["jpg", "jpeg", "png", "gif"],
            transformation: { width: 500, height: 500, crop: "limit" }, // Adjust transformation if needed
          },
          (error, result) => {
            if (error) {
              return reject(error);
            }
            resolve(result);
          }
        )
        .end(file.buffer); // End the stream with the file buffer
    });

    const imageUrl = cloudinaryResult.secure_url;

    const newTestimonial = new Testimonial({
      name,
      position,
      message,
      image: imageUrl,
    });

    await newTestimonial.save();
    res.status(201).json({
      status: "success",
      data: {
        testimonial: newTestimonial,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

const getTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find();
    res.status(200).json({ data: testimonials });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch testimonials", error });
  }
};

const updateTestimonial = async (req, res) => {
    try {
      const { id } = req.params;
      const { name, position, message } = req.body;
  
      const file = req.file;
      let imageUrl;
  
      if (file) {
        const cloudinaryResult = await new Promise((resolve, reject) => {
          cloudinary.uploader.upload_stream(
            {
              folder: "UTS_testimonial_Images",
              allowed_formats: ["jpg", "jpeg", "png", "gif"],
              transformation: { width: 500, height: 500, crop: "limit" },
            },
            (error, result) => {
              if (error) {
                return reject(error);
              }
              resolve(result);
            }
          ).end(file.buffer);
        });
        imageUrl = cloudinaryResult.secure_url; 
      }
  
      const testimonial = await Testimonial.findById(id);
      if (!testimonial) {
        return res.status(404).json({
          status: "fail",
          message: "Testimonial not found",
        });
      }
  
      // Update testimonial fields
      testimonial.name = name || testimonial.name; 
      testimonial.position = position || testimonial.position; 
      testimonial.message = message || testimonial.message;
      if (imageUrl) {
        testimonial.image = imageUrl; 
      }
  
      await testimonial.save(); 
      res.status(200).json({
        status: "success",
        data: {
          testimonial,
        },
      });
    } catch (error) {
      res.status(400).json({
        status: "fail",
        message: error.message,
      });
    }
  };
const deleteTestimonial = async (req, res) => {
  const { id } = req.params;
  try {
    await Testimonial.findByIdAndDelete(id);
    res.status(200).json({ message: "Testimonial deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete testimonial", error });
  }
};

module.exports = {
  createTestimonial,
  getTestimonials,
  updateTestimonial,
  deleteTestimonial,
};
