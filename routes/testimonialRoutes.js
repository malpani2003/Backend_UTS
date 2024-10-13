// routes/testimonials.js
const express = require('express');
const router = express.Router();
const { createTestimonial, getTestimonials, updateTestimonial, deleteTestimonial } = require('../controllers/testimonialController');


router.get('/', getTestimonials);

// admin
router.post('/', createTestimonial);
router.patch('/:id', updateTestimonial);
router.delete('/:id', deleteTestimonial);

module.exports = router;
