const Contact = require("../models/contactModel");
const nodemailer = require('nodemailer');
const transporter=require("../config/node_mailer");

const submitContact = async (req, res) => {
  const { name, email, mobileNumber, message } = req.body;

  try {
    const newContact = new Contact({
      name,
      email,
      mobileNumber,
      message,
    });
    
    await newContact.save();
    
    // Prepare the email data
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: 'New Contact Form Submission',
      text: `
        Name: ${name}
        Email: ${email}
        Mobile Number: ${mobileNumber}
        Message: ${message}
      `,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile Number:</strong> ${mobileNumber}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    res.status(201).json({ message: "Message submitted successfully" });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Failed to submit message" });
  }
};

const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch contact messages" });
  }
};

module.exports = { getAllContacts, submitContact };
