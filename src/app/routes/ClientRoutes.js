const ClientRoutes = require('express').Router();
const ClientController = require('../controllers/ClientController');

ClientRoutes.get('/clients', ClientController.getClients);
ClientRoutes.get('/client/:id', ClientController.getClient);
ClientRoutes.post('/clients', ClientController.createClient);
ClientRoutes.patch('/client/:id', ClientController.updateCliente);
ClientRoutes.delete('/client/:id', ClientController.deleteClient);

module.exports = ClientRoutes;