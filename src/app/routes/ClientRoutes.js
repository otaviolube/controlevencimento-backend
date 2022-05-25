const ClientRoutes = require('express').Router();
const ClientController = require('../controllers/ClientController');
const AuthMiddleware = require('../middlewares/AuthMiddleware');

ClientRoutes.get('/clients', AuthMiddleware.validateToken, ClientController.getClients);
ClientRoutes.get('/client/:id', AuthMiddleware.validateToken, ClientController.getClient);
ClientRoutes.post('/client', AuthMiddleware.validateToken, ClientController.createClient);
ClientRoutes.patch('/client/:id', AuthMiddleware.validateToken, ClientController.updateClient);
ClientRoutes.delete('/client/:id', AuthMiddleware.validateToken, ClientController.deleteClient);

module.exports = ClientRoutes;