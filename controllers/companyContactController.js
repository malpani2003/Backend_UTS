const Contact = require("../models/companyContactModel");

// Insert contact details
const insertContactDetails = async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.status(201).json({ message: "Contact details added successfully!" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update contact details
const updateContactDetails = async (req, res) => {
  try {
    const updatedContact = await Contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res
      .status(200)
      .json({
        message: "Contact details updated successfully!",
        updatedContact,
      });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get contact details
const getContactDetails = async (req, res) => {
  try {
    const contact = await Contact.findOne();
    if (!contact)
      return res.status(404).json({ message: "Contact details not found!" });
    res.status(200).json(contact);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getContactDetails,
  updateContactDetails,
  insertContactDetails,
};
