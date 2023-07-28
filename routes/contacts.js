const express = require('express');
const router = express.Router();
const contactCtrl = require('../controllers/contacts');
// to ensure user is logged in when using the app
const ensureLoggedIn = require('../config/ensureLoggedIn');

// GET /contacts
router.get('/', ensureLoggedIn, contactCtrl.index);
// GET /contacts/new
router.get('/new',ensureLoggedIn, contactCtrl.new);
// POST /contacts
router.post('/',ensureLoggedIn, contactCtrl.create);
// GET /contacts/:id/edit
router.get('/:id/edit',ensureLoggedIn, contactCtrl.edit);
// PUT /contacts/:id
router.put('/:id',ensureLoggedIn, contactCtrl.update);
// DELETE /contacts/:id
router.delete('/:id',ensureLoggedIn, contactCtrl.delete);

module.exports = router;