const express = require('express');
const friendsController = require('../controller/friendsController');

const friendsRouter = express.Router();

friendsRouter.use((req, res, next) => {
  console.log('The IP of the request is: ', req.ip);
  next();
})

friendsRouter.get('/', friendsController.getFriends);
friendsRouter.get('/:friendId', friendsController.getFriendId);
friendsRouter.post('/', friendsController.postFriends);

module.exports = friendsRouter;