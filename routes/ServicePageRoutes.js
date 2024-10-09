const express = require("express");
const router = express.Router();
const adminAuth = require('../middleware/authMiddleware'); 
const servicePageController = require("../controllers/servicePageController"); // Import controller


router.get("/", servicePageController.getAllWebPages);
router.get("/:id", servicePageController.getWebPageById);

// admin
router.post("/create", adminAuth.checkIsAdmin,servicePageController.createWebPage);
router.put("/update/:id", adminAuth.checkIsAdmin,servicePageController.updateWebPage);


module.exports = router;
