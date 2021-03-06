const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

if (process.env.ENV === 'Test') {
  console.log('This is a test.');
  mongoose.connect('mongodb://localhost:27017/DbTest_Test');
} else {
  console.log('This is for real.');
  mongoose.connect('mongodb://localhost:27017/DbTest');
}

const Book = require('./models/bookModel');
const bookRouter = require('./routes/bookRouter')(Book);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', bookRouter);

app.get('/', (req, res) => {
  res.send('Welcome to my API!');
});

app.server = app.listen(port, () => {
  console.log(`Running on port ${port}`);
});

module.exports = app;
