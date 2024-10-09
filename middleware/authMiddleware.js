const jwt = require("jsonwebtoken");
const Admin = require("../models/userModel");

const checkIsAdmin = async (req, res, next) => {
  console.log(req.cookies);
  const token = req.cookies.token || req.headers["authorization"];
  console.log(token);
  if (!token) {
    return res
      .status(403)
      .json({ message: "Forbidden: Access is denied. Please Login First" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const adminId = decoded._id;
    
    const adminData = await Admin.findById(adminId);
    console.log(adminData);
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
