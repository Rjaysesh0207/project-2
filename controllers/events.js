const Event = require('../models/event')

module.exports = {
  new: newEvent,
  index
}
function newEvent(req, res) {
  res.render('events/new', { title: 'Create Event', errorMsg: ''})
}

async function index(req, res) {
  const events = await Event.find({})
  res.render('events/index', { title: 'Events Page', events })
}