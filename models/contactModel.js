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
        return /^[0-9]{10}$/.test(v);
      },
      message: props => `${props.value} is not a valid mobile number!`,
    },
  },
  message: {
    type: String,
    required: true,
  },
}, { timestamps: true }); // Automatically manage createdAt and updatedAt fields

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
