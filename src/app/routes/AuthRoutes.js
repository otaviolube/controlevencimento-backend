const AuthRoutes = require('express').Router();
const AuthController = require('../controllers/AuthController');
const AuthMiddleware = require('../middlewares/AuthMiddleware');

AuthRoutes.post('/login', AuthController.login);
AuthRoutes.post('/forget_password', AuthController.forget_password);
AuthRoutes.post('/reset_password', AuthMiddleware.validateResetPasswordToken, AuthController.reset_password)
AuthRoutes.get('/logout', AuthMiddleware.validateToken, AuthController.logout);

module.exports = AuthRoutes;