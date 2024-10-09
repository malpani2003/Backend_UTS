const express = require('express');
const router = express.Router();
const aboutController = require('../controllers/aboutPageController');
const adminAuth = require('../middleware/authMiddleware');  

// About Page Data (accessible to everyone)
router.get('/', aboutController.getAboutPage);

// Admin Routes

// Create About Page Data 
router.post('/', adminAuth.checkIsAdmin, aboutController.createAboutPage);

// Update About Page Data 
router.put('/:id', adminAuth.checkIsAdmin, aboutController.updateAboutPage);

// Delete About Page Data 
router.delete('/:id', adminAuth.checkIsAdmin, aboutController.deleteAboutPage);

module.exports = router;
