const Blog = require("../models/blogModel");
const cloudinary = require("../config/cloudinaryConfig");

const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({}, { detail: 0 });
    res.status(200).json({
      status: "success",
      results: blogs.length,
      data: {
        blogs,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

const getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({
        status: "fail",
        message: "Blog not found",
      });
    }
    res.status(200).json({
      status: "success",
      data: {
        blog,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

const createBlog = async (req, res) => {
  try {
    const { title, author, shortDescription, detail } = req.body;

    const file = req.file; // File is now in memory, not on disk
    if (!file) {
      return res.status(400).json({
        status: "fail",
        message: "No file uploaded",
      });
    }

    // Cloudinary upload stream handling
    const cloudinaryResult = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        {
          folder: "UTS_Images",
          allowed_formats: ["jpg", "jpeg", "png", "gif"],
          transformation: { width: 500, height: 500, crop: "limit" },
        },
        (error, result) => {
          if (error) {
            return reject(error); // Error for this request
          }
          resolve(result); // Successful upload
        }
      ).end(file.buffer); // Pipe file buffer to Cloudinary
    });

    const imageUrl = cloudinaryResult.secure_url;
    const newBlog = new Blog({
      title,
      author,
      shortDescription,
      detail,
      image: imageUrl, // Save the image URL in the blog post
    });

    await newBlog.save(); // Save the blog to the database
    res.status(201).json({
      status: "success",
      data: {
        blog: newBlog,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) {
      return res.status(404).json({
        status: "fail",
        message: "Blog not found",
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
  getAllBlogs,
  getBlogById,
  createBlog,
  deleteBlog,
};
