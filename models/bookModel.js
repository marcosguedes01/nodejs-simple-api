const mongoose = require('mongoose');

const { Schema } = mongoose;

const Book = new Schema(
  {
    title: { type: String },
    author: { type: String },
    genre: { type: String },
    read: { type: Boolean, default: false },
    country: { type: String },
    imageLink: { type: String },
    language: { type: String },
    link: { type: String },
    pages: { type: Number },
    year: { type: Number },
  }
);

module.exports = mongoose.model('books', Book);
