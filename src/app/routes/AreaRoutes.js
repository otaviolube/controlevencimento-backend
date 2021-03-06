const AreaRoutes = require('express').Router();
const AreaController = require('../controllers/AreaController');
const AuthMiddleware = require('../middlewares/AuthMiddleware');


AreaRoutes.get('/areas', AuthMiddleware.validateToken, AreaController.getAllAreas);
AreaRoutes.get('/area/:id', AuthMiddleware.validateToken, AreaController.getArea);
AreaRoutes.post('/area', AuthMiddleware.validateToken, AreaController.createArea);
AreaRoutes.patch('/area/:id', AuthMiddleware.validateToken, AreaController.updateArea);
AreaRoutes.delete('/area/:id', AuthMiddleware.validateToken, AreaController.deleteArea);


module.exports = AreaRoutes;