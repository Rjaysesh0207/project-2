const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  phone: { 
    type: Number, 
    required: true
  },
  email: String,
}, {
  timestamps: true
})

module.exports = mongoose.model('Contact', contactSchema);