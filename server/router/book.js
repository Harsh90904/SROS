const { Router } = require('express');
const bookRouter = Router();
const bookController = require('../controller/BookController');

bookRouter.post('/', bookController.createBooking);
bookRouter.get('/', bookController.getAllBookings);
bookRouter.get('/:id', bookController.getBookingById);
bookRouter.put('/:id', bookController.updateBooking);
bookRouter.delete('/:id', bookController.deleteBooking);

module.exports = bookRouter;
