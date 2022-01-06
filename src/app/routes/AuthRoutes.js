const AuthRoutes = require('express').Router();
const AuthController = require('../controllers/AuthController');

AuthRoutes.post('/login', AuthController.login);
AuthRoutes.get('/logout', AuthController.logout);

module.exports = AuthRoutes;