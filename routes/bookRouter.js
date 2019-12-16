const express = require('express');

function routes(Book){
  const bookRouter = express.Router();

  bookRouter.route('/books')
    .post((req, res) => {
      const book = new Book(req.body);
      
      book.save();
      return res.status(201).json(book);
    })
    .get((req, res) => {
      const { query } = req;
      Book.find(query, (err, books) => {
        if (err) {
          return res.send(err);
        }
        return res.json(books);
      })
    });

  bookRouter.route('/books/:bookId')
    .get((req, res) => {
      Book.findById(req.params.bookId, (err, book) => {
        if (err) {
          return res.send(err);
        }
        return res.json(book);
      })
    })
    .put((req, res) => {
      Book.findById(req.params.bookId, (err, book) => {
        if (err) {
          return res.send(err);
        }

        book.read = req.body.read;
        book.author = req.body.author;
        book.country = req.body.country;
        book.language = req.body.language
        book.pages = req.body.pages;
        book.title = req.body.title;
        book.year = req.body.year;

        book.save();

        return res.json(book);
      });
    });

  return bookRouter;
}

module.exports = routes;