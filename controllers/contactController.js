const Contact = require('../models/contactModel');

const submitContact = async (req, res) => {
  const { name, email, mobileNumber, message } = req.body;

  try {
    const newContact = new Contact({
      name,
      email,
      mobileNumber,
      message
    });
    await newContact.save();
    res.status(201).json({ message: 'Message submitted successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Failed to submit message' });
  }
};

const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch contact messages' });
  }
};


module.exports={getAllContacts,submitContact}