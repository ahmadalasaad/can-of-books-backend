'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());

const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;

mongoose.connect(`${MONGO_URL}`);

const { getBooks } = require('./controllers/book.controllers.js');

const getTest = require('./controllers/test.controller.js');

const seedBook = require('./helper/bookSeed.seed.js');
// seedBook();

app.get('/test', getTest);
app.get('/books', getBooks);
app.listen(PORT, () => console.log(`listening on ${PORT}`));
