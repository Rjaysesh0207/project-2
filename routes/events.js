const express = require('express');
const router = express.Router();
// requiring the events controller
const eventsCtrl = require('../controllers/events');

// GET /events
router.get('/', eventsCtrl.index);
router.get('/new',eventsCtrl.new)


module.exports = router;