const express = require('express');
const router = express.Router();
const contactCtrl = require('../controllers/contacts');

// GET /contacts
router.get('/', contactCtrl.index);
// GET /contacts/new
router.get('/new', contactCtrl.new);
// POST /contacts
router.post('/', contactCtrl.create);
// DELETE /contacts/:id
router.delete('/:id', contactCtrl.delete);

module.exports = router;