const Contact = require('../models/contact');

module.exports = {
  index,
  // new: newContact
}

async function index(req, res) {
  const contacts = await Contact.find({}).sort('name');
  res.render('contacts/index', { title: 'Contacts', contacts });
}

// async function newContact(req, res) {
  // sort contacts by name
//   const contacts = await Contact.find({}).sort('name');
//   res.render('contacts/new', { title: 'Add Contact', contacts });
// }