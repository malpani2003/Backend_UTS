const express = require('express');
const router = express.Router();
const homePageController = require('../controllers/homePageController');


// get HomePage data
router.get('/home', homePageController.getHomePage);

// admin
// create HomePage data
router.post('/home', homePageController.createHomePage);
// update homePage data
router.put('/home', homePageController.updateHomePage);
// delete HomePage data
router.delete('/home', homePageController.deleteHomePage);


module.exports = router;
