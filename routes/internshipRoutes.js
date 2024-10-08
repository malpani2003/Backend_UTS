const express = require("express");
const internshipController = require("../controllers/internshipController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

// for all users
router.get("/", internshipController.getAllInternships);

// admin
router.post(
  "/",
  authMiddleware.checkIsAdmin,
  internshipController.createInternship
);
router.delete(
  "/:id",
  authMiddleware.checkIsAdmin,
  internshipController.deleteInternship
);

module.exports = router;
