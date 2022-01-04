const UserRoutes = require('express').Router();
const UserController = require('../controllers/UserController');

UserRoutes.post('/user', UserController.createUser); //Create
UserRoutes.get('/user/:id', UserController.showUser);
UserRoutes.get('/user', UserController.listUsers); //Read
UserRoutes.patch('/user/:id', UserController.changeUser); //Update
UserRoutes.delete('/user/:id', UserController.deleteUser); //Delete

module.exports = UserRoutes;