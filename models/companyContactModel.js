const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  companyName: { type: String, required: true },
  address: { type: String, required: true },
  emailSupport: { type: String, required: true },
  emailSales: { type: String, required: true },
  phoneNumbers: [{ type: String, required: true }],
  socialLinks: {
    facebook: { type: String, required: true },
    instagram: { type: String, required: true },
    pinterest: { type: String, required: true },
    linkedin: { type: String, required: true },
  },
  lastUpdated: { type: Date, default: Date.now },
});

const companyContact = mongoose.model("CompanyContact", contactSchema);
module.exports = companyContact;
