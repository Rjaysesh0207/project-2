const express = require('express');
const router = express.Router();
// requiring the events controller
const eventsCtrl = require('../controllers/events');

// GET /events
router.get('/', eventsCtrl.index);
// GET /events/new
router.get('/new',eventsCtrl.new)
// GET /events/:id
router.get('/:id', eventsCtrl.show);
// POST /events
router.post('/', eventsCtrl.create);
// GET /events/:id/
router.get('/:id/edit', eventsCtrl.edit);
// POST /events/:id
router.put('/:id', eventsCtrl.update);
// DELETE /events/:id
router.delete('/:id', eventsCtrl.delete);


module.exports = router;