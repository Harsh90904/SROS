const { Router } = require('express');
const paymentRouter = Router();
const paymentController = require('../controller/PaymentController');

paymentRouter.post('/', paymentController.createPayment);
paymentRouter.get('/', paymentController.getAllPayments);
paymentRouter.get('/:id', paymentController.getPaymentById);
paymentRouter.put('/:id', paymentController.updatePayment);
paymentRouter.delete('/:id', paymentController.deletePayment);

module.exports = paymentRouter;
