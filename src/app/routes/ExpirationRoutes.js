const ExpirationRoutes = require('express').Router();
const ExpirationController = require('../controllers/ExpirationModel');

ExpirationRoutes.get('/expirations', ExpirationController.getExpirations);
ExpirationRoutes.get('/expirations/:id', ExpirationController.getExpiration);
ExpirationRoutes.post('/expirations', ExpirationController.createExpiration);
ExpirationRoutes.patch('/expiration/:id', ExpirationController.updateExpiration);
ExpirationRoutes.delete('/expiration/:id', ExpirationController.deleteExpiration);

module.exports = ExpirationRoutes;