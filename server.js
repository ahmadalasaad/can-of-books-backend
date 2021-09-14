'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;

mongoose.connect(MONGO_URL);

const {
    getBooks,
    createBook,
    deleteBook } = require('./controllers/book.controllers.js');

const getTest = require('./controllers/test.controller.js');
const seedBook = require('./helper/bookSeed.seed.js');
// seedBook();

app.get('/test', getTest);
app.get('/books', getBooks);
app.post('/books', createBook);
app.delete('/books/:books_id', deleteBook);

app.listen(PORT, () => console.log(`listening on ${PORT}`));
