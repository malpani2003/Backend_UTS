const express = require('express');
const router = express.Router();
const CompanyContact = require('../models/companyContactModel');
const companyContactController=require("../controllers/companyContactController");
const adminAuth = require('../middleware/authMiddleware'); 

// Get contact details
router.get('/',companyContactController.getContactDetails);

// admin
// Insert new contact details
router.post('/',adminAuth.checkIsAdmin,companyContactController.insertContactDetails);
// Update existing contact details
router.put('/:id',adminAuth.checkIsAdmin,companyContactController.updateContactDetails);

module.exports = router;
