const express = require('express');
const router = express.Router();
const contactCtrl = require('../controllers/contacts');

// GET /contacts
router.get('/', contactCtrl.index);
// GET /contacts/new
router.get('/new', contactCtrl.new);
// POST /contacts
router.post('/', contactCtrl.create);
// GET /contacts/:id/edit
router.get('/:id/edit', contactCtrl.edit);
// PUT /contacts/:id
router.put('/:id', contactCtrl.update);
// DELETE /contacts/:id
router.delete('/:id', contactCtrl.delete);

module.exports = router;