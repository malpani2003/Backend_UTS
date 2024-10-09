const express = require("express");
const blogController = require("../controllers/blogController");
const adminAuth = require("../middleware/authMiddleware");
const router = express.Router();
const uploadMiddlware = require("../middleware/uploadMiddleware");

// All users

//  all blogs
router.get("/", blogController.getAllBlogs);
//  single blog
router.get("/:id", blogController.getBlogById);

// For admin
// add a new blog
router.post(
  "/",
  adminAuth.checkIsAdmin,
  uploadMiddlware.single("image"),
  blogController.createBlog
);
// delete a blog
router.delete("/:id", adminAuth.checkIsAdmin, blogController.deleteBlog);

module.exports = router;
