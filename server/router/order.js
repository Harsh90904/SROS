const { Router } = require('express');
const orderRouter = Router();
const orderController = require('../controller/OrderController');

orderRouter.post('/', orderController.createOrder);
orderRouter.get('/', orderController.getAllOrders);
orderRouter.get('/:id', orderController.getOrderById);
orderRouter.put('/:id', orderController.updateOrder);
orderRouter.delete('/:id', orderController.deleteOrder);

module.exports = orderRouter;
