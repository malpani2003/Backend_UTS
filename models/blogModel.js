const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: [true, "A blog post must have a title"],
    minlength: [10, "Title must be at least 10 characters long"],
    maxlength: [100, "Title must be less than 100 characters"],
  },
  image: {
    type: String,
    trim: true,
    required: [true, "A blog post must have an image URL"]
  },
  author: {
    type: String,
    trim: true,
    required: [true, "A blog post must have an author"],
  },
  shortDescription: {
    type: String,
    trim: true,
    required: [true, "A blog post must have a short description"],
    maxlength: [300, "Short description should not exceed 300 characters"],
  },
  detail: {
    type: String,
    trim: true,
    required: [true, "A blog post must have detailed content"],
  },
},
{
  timestamps: true,
});

const Blog = mongoose.model("Blog", BlogSchema);

module.exports = Blog;
