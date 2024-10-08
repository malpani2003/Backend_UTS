const jwt = require("jsonwebtoken");
const Admin = require("../models/userModel");

const checkIsAdmin = async (req, res, next) => {
  const token = req.cookies.token || req.headers["authorization"];

  if (!token) {
    return res
      .status(403)
      .json({ message: "Forbidden: Access is denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const adminId = decoded._id;
    
    const adminData = await Admin.findById(adminId);

    if (adminData) {
      return next();
    } else {
      return res
        .status(403)
        .json({ message: "Forbidden: Access is denied. Not an admin." });
    }
  } catch (error) {
    return res.status(403).json({ message: "Forbidden: Invalid token." });
  }
};

module.exports = { checkIsAdmin };
