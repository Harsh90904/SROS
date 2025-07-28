const { Router } = require('express');
const tableRouter = Router();
const tableController = require('../controller/TableController');

tableRouter.post('/', tableController.createTable);
tableRouter.get('/', tableController.getAllTables);
tableRouter.get('/:id', tableController.getTableById);
tableRouter.put('/:id', tableController.updateTable);
tableRouter.delete('/:id', tableController.deleteTable);

module.exports = tableRouter;
