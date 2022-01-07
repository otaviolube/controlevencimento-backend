const UserRoutes = require('express').Router();
const UserController = require('../controllers/UserController');
const AuthMiddleware = require('../middlewares/AuthMiddleware');

UserRoutes.post('/user', AuthMiddleware.validateToken, UserController.createUser); //Create
UserRoutes.get('/user/:id', AuthMiddleware.validateToken, UserController.showUser);
UserRoutes.get('/user', AuthMiddleware.validateToken, AuthMiddleware.accessControlAdminOnly, UserController.listUsers); //Read
UserRoutes.patch('/user/:id', AuthMiddleware.validateToken, AuthMiddleware.accessControlAdminOnly, UserController.changeUser); //Update
UserRoutes.delete('/user/:id', AuthMiddleware.validateToken, AuthMiddleware.accessControlAdminOnly, UserController.changeUser, UserController.deleteUser); //Delete

module.exports = UserRoutes;