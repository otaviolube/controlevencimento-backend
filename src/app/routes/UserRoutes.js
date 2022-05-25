const UserRoutes = require('express').Router();
const UserController = require('../controllers/UserController');
const AuthMiddleware = require('../middlewares/AuthMiddleware');
const multer = require('multer');

UserRoutes.post('/user', AuthMiddleware.validateToken, AuthMiddleware.accessControlAdminOnly, UserController.createUserAndNotify); //Create
UserRoutes.get('/user/:id', AuthMiddleware.validateToken, UserController.showUser);
UserRoutes.get('/users', AuthMiddleware.validateToken, AuthMiddleware.accessControlAdminOnly, UserController.listUsers); //Read
UserRoutes.patch('/user/:id', AuthMiddleware.validateToken, AuthMiddleware.accessControlAdminOnly, UserController.changeUser); //Update
UserRoutes.delete('/user/:id', AuthMiddleware.validateToken, AuthMiddleware.accessControlAdminOnly, UserController.deleteUser); //Delete

UserRoutes.post('/user/photo', AuthMiddleware.validateToken,
    multer({ storage: multer.memoryStorage() }).single('file'),
    UserController.uploadPhoto);


module.exports = UserRoutes;