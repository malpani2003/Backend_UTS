const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController'); 
const authenticateAdmin = require('../middleware/authMiddleware');

// submit a contact form
router.post('/submit', contactController.submitContact);

// admin
// get all contact submissions
router.get('/', contactController.getAllContacts);

module.exports = router;
