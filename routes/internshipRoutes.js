const express = require("express");
const internshipController = require("../controllers/internshipController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

// for all users
router.get("/", internshipController.getAllInternships);

// admin
router.post("/", internshipController.createInternship);
router.put("/:id", internshipController.updateInternship);
router.delete("/:id", internshipController.deleteInternship);

module.exports = router;
