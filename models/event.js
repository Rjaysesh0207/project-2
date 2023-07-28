const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  title: { type: String, required: true },
  date: {
    type: Date,
    default: function() {
      return new Date().getFullYear();
    },
  },
  location: { 
    type: String, 
    required: true 
  },
  guests: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Contact',
  }],
}, {
  timestamps: true
});


module.exports = mongoose.model('Event', eventSchema);