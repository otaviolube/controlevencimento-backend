const ItemRoutes = require('express').Router();
const ItemController = require('../controllers/ItemController');
const AuthMiddleware = require('../middlewares/AuthMiddleware');

ItemRoutes.get('/items', AuthMiddleware.validateToken,ItemController.showItems);
ItemRoutes.get('/item/:id', AuthMiddleware.validateToken,ItemController.showItem);
ItemRoutes.post('/item', AuthMiddleware.validateToken, ItemController.createItem);
ItemRoutes.patch('/item/:id', AuthMiddleware.validateToken,ItemController.updateItem);
ItemRoutes.delete('/item/:id', AuthMiddleware.validateToken,ItemController.deleteItem);

module.exports = ItemRoutes;