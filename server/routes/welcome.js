const express = require('express');
const router = express.Router();

const welcomeController = require('../controllers/welcomeController');
const eventsControllers = require('../controllers/eventsController');

router.get('/', welcomeController.getWelcome);

router.post('/new-event', eventsControllers.postNewEvent);

module.exports = router;