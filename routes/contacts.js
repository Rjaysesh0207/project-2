const express = require('express');
const router = express.Router();
const contactCtrl = require('../controllers/contacts');

// GET /contacts
router.get('/', contactCtrl.index);
// GET /contacts/new
router.get('/new', contactCtrl.new);

module.exports = router;