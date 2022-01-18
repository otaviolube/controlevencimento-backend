const ColaboratorRoutes = require('express').Router();
const ColaboratorController = require('../controllers/ColaboratorController');
const AuthMiddleware = require('../middlewares/AuthMiddleware');


ColaboratorRoutes.get('/colaborators', AuthMiddleware.validateToken, ColaboratorController.getAllColaborators);
ColaboratorRoutes.get('/colaborator/:id', AuthMiddleware.validateToken, ColaboratorController.getColaborator);
ColaboratorRoutes.post('/colaborators', AuthMiddleware.validateToken, ColaboratorController.createColaborator);
ColaboratorRoutes.patch('/colaborator/:id', AuthMiddleware.validateToken, ColaboratorController.updateColaborator);
ColaboratorRoutes.delete('/colaborator/:id', AuthMiddleware.validateToken, ColaboratorController.deleteColaborator);


module.exports = ColaboratorRoutes;