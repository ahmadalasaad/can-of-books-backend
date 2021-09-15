'use strict';

const bookModel = require('../models/book.model');

const seedBook = () => {

  const firstBook = new bookModel({
    title: 'The Promise',
    description: 'In Damon Galgut’s deft, powerful story of a diminished family and a troubled land, brutal emotional truths hit home.',
    status: 'availabe',
    email:'haneen.hashlamou@gmail.com'
  });

  // save the cats data in the DB
  firstBook.save();

  const secondBook = new bookModel({
    title: 'A Passage North',
    description: 'Anuk Arudpragasams masterful novel is an attempt to come to terms with life in the wake of devastation of Sri Lankas 30-year civil war.',
    status: 'unavailable',
    email:'haneen.hashlamou@gmail.com'
  });

  secondBook.save();

  console.log("Data seeded! 👍");
}

module.exports = seedBook;