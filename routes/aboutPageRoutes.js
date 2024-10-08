const express = require('express');
const router = express.Router();
const aboutController = require('../controllers/aboutPageController');

// about Page Data
router.get('/', aboutController.getAboutPage);

// admin

// create About Data
router.post('/', aboutController.createAboutPage);

// update Page Data
router.put('/:id', aboutController.updateAboutPage);

// delete about Data
router.delete('/:id', aboutController.deleteAboutPage);


module.exports = router;
