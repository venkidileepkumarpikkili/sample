const express = require('express');
const router = express.Router();
const controller = require('../controllers/message.controller');

router.post('/', controller.sendMessage);
router.get('/:user1/:user2', controller.getChat);

module.exports = router;
