const Contact = require('../models/contact');

module.exports = {
  index,
  new: newContact,
  create,
  edit,
  update,
  delete: deleteContact,
}

async function index(req, res) {
  const contacts = await Contact.find({}).sort('name');
  res.render('contacts/index', { title: 'Contacts', contacts });
}

async function newContact(req, res) {
  // sort contacts by name
  const contacts = await Contact.find({}).sort('name');
  res.render('contacts/new', { title: 'Add Contact', contacts });
}

async function create(req, res) {
  try {
    await Contact.create(req.body);
  } catch (error) {
    console.log(error);
  }
  res.redirect('/contacts');
  
}


async function edit(req, res) {
  const contactId = req.params.id;

  try {
    // Fetch the contact details based on the contactId
    const contact = await Contact.findById(contactId);

    if (!contact) {
      // If the contact with the provided ID is not found
      return res.status(404).json({ error: 'Contact not found' });
    }

    // Render the edit-contact template with the existing contact data
    res.render('contacts/edit', { title: 'Edit Contact', contact });
  } catch (error) {
    console.error('Error fetching contact details:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function update(req, res) {
  const contactId = req.params.id;
  const updatedContact = req.body;

  try {
    // Find the contact by its ID and update it with the new data
    const contact = await Contact.findByIdAndUpdate(contactId, updatedContact, {
      new: true, // Return the updated document
      runValidators: true // Run Mongoose validation on the updated data
    });

    if (!contact) {
      // If the contact with the provided ID is not found
      return res.status(404).json({ error: 'Contact not found' });
    }

    // Redirect to the contact list or respond with JSON if it's an API
    res.redirect('/contacts'); // Or res.json({ message: 'Contact updated successfully' });
  } catch (error) {
    console.error('Error updating contact:', error);
    // Handle the error appropriately, e.g., render an error page or respond with JSON
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function deleteContact(req, res) {
  const contactId = req.params.id;

  try {
    // Find the contact by its ID and remove it
    const deletedContact = await Contact.findByIdAndRemove(contactId);

    if (!deletedContact) {
      // If the contact with the provided ID is not found
      return res.status(404).json({ error: 'Contact not found' });
    }

    // Contact successfully deleted
    console.log('Contact deleted:', deletedContact);

    // Redirect to the contact list or respond with JSON if it's an API
    res.redirect('/contacts'); // Or res.json({ message: 'Contact deleted successfully' });
  } catch (error) {
    console.error('Error deleting contact:', error);
    // Handle the error appropriately, e.g., render an error page or respond with JSON
    res.status(500).json({ error: 'Internal server error' });
  }
}

