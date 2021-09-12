'use strict';

const bookModel = require('../models/book.model');

const seedBook = () => {

  const firstBook = new bookModel({
    title: 'The Promise',
    description: 'In Damon Galgut’s deft, powerful story of a diminished family and a troubled land, brutal emotional truths hit home.',
    status: 'availabe',
    email:'ahmadalserese9754@gmail.com'
  });

  // save the cats data in the DB
  firstBook.save();

  const secondBook = new bookModel({
    title: 'haneen',
    description: 'Anuk Arudpragasams masterful novel is an attempt to come to terms with life in the wake of devastation of Sri Lankas 30-year civil war.',
    status: 'unavailable',
    email:'hanen@email'
  });

  secondBook.save();

  console.log("Data seeded! 👍");
}

module.exports = seedBook;