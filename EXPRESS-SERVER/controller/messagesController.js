const path = require('path');

function getMessages(req, res) {
  res.sendFile(path.join(__dirname, '..', 'public', 'images', 'armgrad.jpg'));
  //res.status(200).send('<ul><li>Hello Precious</li></ul>');
}

function postMessages (req, res) {
  res.status(200).send('Updating messages...');
}

module.exports = {
  getMessages, postMessages
}
