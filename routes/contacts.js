const express = require('express');
const router = express.Router();
const contactCtrl = require('../controllers/contacts');

// GET /contacts
router.get('/', contactCtrl.index);

module.exports = router;