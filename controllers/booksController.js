function booksController(Book) {
  function get(req, res) {
    const { query } = req;
    Book.find(query, (err, books) => {
      if (err) {
        return res.send(err);
      }
      return res.json(books);
    });
  }

  function post(req, res) {
    const book = new Book(req.body);

    book.save((err) => {
      if (err) {
        return res.send(err);
      }
      return res.status(201).json(book);
    });
  }

  return { post, get };
}

module.exports = booksController;
