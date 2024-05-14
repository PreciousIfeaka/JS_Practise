const friends = require('../models/friendModels');

function getFriends(req, res) {
  //res.setHeader('Content-Type', 'application/json');
  res.status(200).json(friends);
}

function postFriends(req, res) {
  if (!req.body.name) {
    return res.status(400).json({
      error: 'missing friend name',
    });
  } else {
    const newFriend = {
      id: friends.length,
      name: req.body.name
    }
    friends.push(newFriend);
    res.status(200).json(newFriend);
  }
}

function getFriendId(req, res)  {
  const friendId = parseInt(req.params.friendId);
  let theFriend;
  friends.forEach((friend) => {
    if (parseInt(friend.id) === friendId) {
      theFriend = friend;
    }
  })
  if (theFriend) {
    res.status(200).json(theFriend);
  } else res.status(404).send('Invalid friend Id'); 
}

module.exports = {
  getFriends, getFriendId, postFriends
}