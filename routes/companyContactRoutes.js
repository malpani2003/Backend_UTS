const express = require('express');
const router = express.Router();
const CompanyContact = require('../models/companyContactModel');
const companyContactController=require("../controllers/companyContactController");

// Get contact details
router.get('/',companyContactController.getContactDetails);

// admin
// Insert new contact details
router.post('/',companyContactController.insertContactDetails);

// Update existing contact details
router.put('/:id',companyContactController.updateContactDetails);

module.exports = router;
