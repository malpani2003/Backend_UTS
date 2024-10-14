// routes/testimonials.js
const express = require('express');
const router = express.Router();
const { createTestimonial, getTestimonials, updateTestimonial, deleteTestimonial } = require('../controllers/testimonialController');
const uploadMiddlware = require("../middleware/uploadMiddleware");


router.get('/', getTestimonials);

// admin
router.post('/',uploadMiddlware.single("image"),createTestimonial);
router.put('/:id',uploadMiddlware.single("image"),updateTestimonial);
router.delete('/:id', deleteTestimonial);

module.exports = router;
