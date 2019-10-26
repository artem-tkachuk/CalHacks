const express = require('express');
const router = express.Router();

const eventsController = require('../controllers/eventsController');

router.post('/add-user', eventsController.postNewEvent);

module.exports = router;