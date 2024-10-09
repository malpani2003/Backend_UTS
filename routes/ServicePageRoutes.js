const express = require("express");
const router = express.Router();
const servicePageController = require("../controllers/servicePageController"); // Import controller


router.get("/", servicePageController.getAllWebPages);
router.get("/:id", servicePageController.getWebPageById);

// admin
router.post("/create", servicePageController.createWebPage);
router.put("/update/:id", servicePageController.updateWebPage);


module.exports = router;
