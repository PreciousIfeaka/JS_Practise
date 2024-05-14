const messagesController = require('../controller/messagesController');
const express = require('express');
const messagesRouter = express.Router();

messagesRouter.post('/', messagesController.postMessages);
messagesRouter.get('/', messagesController.getMessages);

module.exports = messagesRouter;