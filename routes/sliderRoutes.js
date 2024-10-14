const express = require("express");
const router = express.Router();
const sliderController = require("../controllers/sliderController");
const authMiddleware = require("../middleware/authMiddleware");

// all
router.get("/slides", sliderController.getSlides);

// admin
router.post(
  "/add-slide",
  authMiddleware.checkIsAdmin,
  sliderController.addSlide
);

router.delete(
  '/delete-slide/:id',
  authMiddleware.checkIsAdmin,
  sliderController.deleteSlide
);

module.exports = router;
