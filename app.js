const express = require ('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

const transactionsController = require('./controllers/transactionsController');

app.get('/', (req, res) => {
  res.send('Welcome')
});

app.use('/transactions', transactionsController);

app.get('*', (req, res) => {
  res.status(404).json('Error: Page not found!')
});

module.exports = app;
