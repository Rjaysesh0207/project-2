const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  title: String,
  date: String,
  location: String
}, {
  timestamps: true
});


module.exports = mongoose.model('Event', eventSchema);