const Event = require('../models/event')

module.exports = {
  index,
  show,
  new: newEvent,
  create
}

async function index(req, res) {
  const events = await Event.find({})
  res.render('events/index', { title: 'Events Page', events })
}

async function show(req, res) {
  const event = await Event.findById(req.params.id)
  res.render('events/show', { title: 'Event Details', event })
}

function newEvent(req, res) {
  // render an error message if create action fails
  res.render('events/new', { title: 'Create Event', errorMsg: ''})
}

async function create(req, res) {
  // remove empty properties so default can apply
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
  }
  try {
    const event = await Event.create(req.body)
    // redirect to the newly created event
    res.redirect(`/events`)
  } catch (err) {
    // give an error if it fails
    console.log(err)
    res.render('events/new', { errorMsg: err.message })
  }
}