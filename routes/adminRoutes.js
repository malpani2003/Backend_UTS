const express = require("express");
const router = express.Router();
const adminController = require("../controllers/userController");
const adminAuth = require("../middleware/authMiddleware");

// register a new admin
router.post("/register", adminController.registerAdmin);
// login admin
router.post("/login", adminController.loginAdmin);

router.get("/check-auth", (req, res) => {
  // Check if the user is authenticated by verifying the cookie
  const token = req.cookies.token;
  console.log(token);
  if (!token) {
    return res.status(401).json({ error: "Not authenticated" });
  }
  // Additional token validation can be done here
  res.status(200).json({ message: "Authenticated" });
});

router.post("/logout", (req, res) => {
  // Clear the authentication cookie
  res.clearCookie("token", {
    httpOnly: true,
    secure: true,
    path: "/",
    sameSite: "none",
  });
  res.status(200).json({ message: "Logged out successfully" });
});
module.exports = router;
