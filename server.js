'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());

const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;
const DB_NAME = process.env.DB_NAME;

mongoose.connect(`${MONGO_URL}/${DB_NAME}`);

const { getBooks } = require('./controllers/book.controllers.js');

const getTest = require('./controllers/test.controller.js');

const seedBook = require('./helper/bookSeed.seed.js');
// seedBook();

app.get('/test', getTest);
app.get('/book', getBooks);
app.listen(PORT, () => console.log(`listening on ${PORT}`));
