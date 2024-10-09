require('dotenv').config();
const nodemailer = require('nodemailer');

console.log(process.env.EMAIL_PASS,process.env.EMAIL_USER);
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

module.exports = transporter;