const { Router } = require('express');
const staffRouter = Router();
const staffController = require('../controller/StaffController');

staffRouter.post('/', staffController.createStaff);
staffRouter.get('/', staffController.getAllStaff);
staffRouter.get('/:id', staffController.getStaffById);
staffRouter.put('/:id', staffController.updateStaff);
staffRouter.delete('/:id', staffController.deleteStaff);

module.exports = staffRouter;
