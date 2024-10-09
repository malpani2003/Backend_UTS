const express = require('express');
const router = express.Router();
const homePageController = require('../controllers/homePageController');
const adminAuth = require('../middleware/authMiddleware'); 


// get HomePage data
router.get('/home', homePageController.getHomePage);

// admin
// create HomePage data
router.post('/home',adminAuth.checkIsAdmin, homePageController.createHomePage);
// update homePage data
router.put('/home',adminAuth.checkIsAdmin, homePageController.updateHomePage);
// delete HomePage data
router.delete('/home',adminAuth.checkIsAdmin, homePageController.deleteHomePage);


module.exports = router;
