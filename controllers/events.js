const Event = require('../models/event')

module.exports = {
  index,
  show,
  new: newEvent,
  create,
  edit,
  update,
  delete: deleteEvent
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

async function edit(req, res) {
  const eventId = req.params.id;

  try {
    // Fetch the event details based on the eventId
    const event = await Event.findById(eventId);

    if (!event) {
      // If the event with the provided ID is not found
      return res.status(404).json({ error: 'Event not found' });
    }

    // Render the edit-event template with the existing event data
    res.render('events/edit', { title: 'Edit Event', event });
  } catch (error) {
    console.error('Error fetching event details:', error);
    // Handle the error appropriately, e.g., render an error page or respond with JSON
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function update(req, res) {
  const eventId = req.params.id;
  const updatedEvent = req.body;

  try {
    // Find the event by its ID and update it with the new data
    const event = await Event.findByIdAndUpdate(eventId, updatedEvent, {
      new: true, // Return the updated document
      runValidators: true // Run Mongoose validation on the updated data
    });

    if (!event) {
      // If the event with the provided ID is not found
      return res.status(404).json({ error: 'Event not found' });
    }

    // Redirect to the event list or respond with JSON if it's an API
    res.redirect('/events'); // Or res.json({ message: 'Event updated successfully' });
  } catch (error) {
    console.error('Error updating event:', error);
    // Handle the error appropriately, e.g., render an error page or respond with JSON
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function deleteEvent(req, res) {
  const eventId = req.params.id;

  try {
    // Find the event by its ID and remove it
    const deletedEvent = await Event.findByIdAndRemove(eventId);

    if (!deletedEvent) {
      // If the event with the provided ID is not found
      return res.status(404).json({ error: 'Event not found' });
    }

    // Event successfully deleted
    console.log('Event deleted:', deletedEvent);

    // Redirect to the events list or respond with JSON if it's an API
    res.redirect('/events'); // Or res.json({ message: 'Event deleted successfully' });
  } catch (error) {
    console.error('Error deleting event:', error);
    // Handle the error appropriately, e.g., render an error page or respond with JSON
    res.status(500).json({ error: 'Internal server error' });
  }
}


