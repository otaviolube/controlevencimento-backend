const ItemRoutes = require('express').Router();
const ItemController = require('../controllers/ItemController');

ItemRoutes.get('/items', ItemController.showItems);
ItemRoutes.get('/item/:id', ItemController.showItem);
ItemRoutes.post('/items', ItemController.createItem);
ItemRoutes.patch('/item/:id', ItemController.updateItem);
ItemRoutes.delete('/item/:id', ItemController.deleteItem);

module.exports = ItemRoutes;