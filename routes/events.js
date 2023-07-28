const express = require('express');
const router = express.Router();
// requiring the events controller
const eventsCtrl = require('../controllers/events');
// to ensure the user is logged in when using the app
const ensureLoggedIn = require('../config/ensureLoggedIn');

// GET /events
router.get('/',ensureLoggedIn, eventsCtrl.index);
// GET /events/new
router.get('/new',ensureLoggedIn, eventsCtrl.new)
// GET /events/:id
router.get('/:id',ensureLoggedIn, eventsCtrl.show);
// POST /events
router.post('/',ensureLoggedIn, eventsCtrl.create);
// GET /events/:id/
router.get('/:id/edit',ensureLoggedIn, eventsCtrl.edit);
// POST /events/:id
router.put('/:id',ensureLoggedIn, eventsCtrl.update);
// DELETE /events/:id
router.delete('/:id',ensureLoggedIn, eventsCtrl.delete);


module.exports = router;