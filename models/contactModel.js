const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: function(v) {
        return /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(v); 
      },
      message: props => `${props.value} is not a valid email!`,
    },
  },
  mobile: {
    type: String,
    required: true,
    validate: {
      validator: function(v) {
        // Updated regex to allow phone numbers in the format +<country_code><number>
        return /^\+\d{12}$/.test(v);
      },
      message: props => `${props.value} is not a valid mobile number! It should be in the format +<country_code><number> (e.g., +919636326284).`,
    },
  },
  message: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
