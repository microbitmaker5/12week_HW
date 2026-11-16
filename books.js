var express = require('express');
var router = express.Router();

var books = [
  { id: 1, title: '자바스크립트 첫걸음', author: '김군오' }
];
var id = 2;

router.get('/', function(req, res, next) {
  res.send(books);
});

router.post('/', function(req, res, next) {
  var book = req.body;
  book.id = id;
  books.push(book);
  id += 1;
  res.sendStatus(200);
});

router.put('/:id', function(req, res, next) {
  var index = books.findIndex(function(book) {
    return book.id == req.params.id;
  });
  if (index !== -1) {
    req.body.id = Number(req.params.id);
    books.splice(index, 1, req.body);
  }
  res.sendStatus(200);
});

router.delete('/:id', function(req, res, next) {
  var index = books.findIndex(function(book) {
    return book.id == req.params.id;
  });
  if (index !== -1) {
    books.splice(index, 1);
  }
  res.sendStatus(200);
});

module.exports = router;
