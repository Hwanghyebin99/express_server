const express = require('express');
const router = express.Router();

const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const booksAdapter = new FileSync("./books/books.json");
const booksDb = low(booksAdapter);

router.get('/', (req, res) => {
    const books = booksDb.get('books').value();
    if( books ) {
        return res.jsonp(books);
    } else {
        return res.sendStatus(204);
    }
})
router.post('/', (req, res) => {
    const books = booksDb.get('books').push({
        sn: booksDb.get('books').size().value()+1,
        ...req.body
    }).write();
    if( books ) {
        return res.jsonp({ success: true });
    }else {
        return res.jsonp({ success: false });
    }
})
router.put('/', (req, res) => {
    res.send('update book list');
})
router.get('/:id', (req, res) => {
    res.send('return book by id');
})

module.exports = router;