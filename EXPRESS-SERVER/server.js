const friendsRouter = require('./routes/friendsRoutes');
const messagesRouter = require('./routes/messagesRoutes');
const express = require('express');
const path = require('path');

const app = express();
const port = 3000;
//const host = 127.0.0.1;

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));


app.use((req, res, next) => {
  const start = Date.now();
  next();
  const timeChange = Date.now() - start;
  console.log(`${req.method} ${req.url}, ${timeChange}ms`);

})

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Arm Grads',
    caption: 'The Boardroom: We do very great things from small places!'
  })
})
app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hello, this is my first express server. This is my response.');
});

app.use('/site', express.static(path.join(__dirname, 'public')))
app.use('/friends', friendsRouter);
app.use('/messages', messagesRouter);

app.listen(port, () => {
  console.log(`Listening on port localhost:${port}`);
});