const express = require('express');
const server = express();
const booksRouter = require('./books/booksRouter.js');
const userRouter = require('./user/userRouter.js');

server.use(express.json());

server.use('/', userRouter);
server.use('/books', booksRouter);

server.listen(3000, function () {
    console.log('Server is running on port 3000!')
})
