const { Router } = require('express');
const userRouter = Router();
const userController = require('../controller/UserController');

userRouter.post('/', userController.createUser);
userRouter.get('/', userController.getAllUsers);
userRouter.get('/:id', userController.getUserById);
userRouter.put('/:id', userController.updateUser);
userRouter.delete('/:id', userController.deleteUser);

module.exports = userRouter;
