const multer = require("multer");

// Set up Multer for file storage on the server
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/"); 
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + "-" + file.originalname);
//   }
// });

const storage = multer.memoryStorage();

const upload = multer({ storage: storage });

module.exports = upload;
