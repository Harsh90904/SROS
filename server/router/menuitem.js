const { Router } = require('express');
const menuItemRouter = Router();
const menuItemController = require('../controller/MenuItemController');
const upload = require('../middleware/upload');

menuItemRouter.post('/', upload.single('image'), menuItemController.createMenuItem);
menuItemRouter.get('/', menuItemController.getAllMenuItems);
menuItemRouter.get('/:id', menuItemController.getMenuItemById);
menuItemRouter.put('/:id', menuItemController.updateMenuItem);
menuItemRouter.delete('/:id', menuItemController.deleteMenuItem);

module.exports = menuItemRouter;
