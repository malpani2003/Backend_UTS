const express = require('express');
const router = express.Router();
const adminController = require('../controllers/userController');

// register a new admin
router.post('/register', adminController.registerAdmin);
// login admin
router.post('/login', adminController.loginAdmin);

module.exports = router;
