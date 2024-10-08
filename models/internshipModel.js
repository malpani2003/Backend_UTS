const mongoose = require("mongoose");

const internshipSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: [10, "Title must be at least 10 characters long"],
      maxlength: [100, "Title must be less than 100 characters"],
    },
    description: {
      type: String,
      required: true,
      maxlength: [200, "Description should not exceed 200 characters"],
    },
    applyLink: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const Internship = mongoose.model("Internship", internshipSchema);

module.exports = Internship;
