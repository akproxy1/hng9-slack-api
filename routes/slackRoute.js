const express = require('express');

const router = express.Router();
const controller = require('../controllers/slackController');

router.get('/', controller.example)

module.exports = router;

