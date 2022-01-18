const CompanyRoutes = require('express').Router();
const CompanyController = require('../controllers/CompanyController');
const AuthMiddleware = require('../middlewares/AuthMiddleware');


CompanyRoutes.get('/companies', AuthMiddleware.validateToken, CompanyController.getAllCompanies);
CompanyRoutes.get('/company/:id', AuthMiddleware.validateToken, CompanyController.getCompany);
CompanyRoutes.post('/companies', AuthMiddleware.validateToken, CompanyController.createCompany);
CompanyRoutes.patch('/company/:id', AuthMiddleware.validateToken, CompanyController.updateCompany);
CompanyRoutes.delete('/company/:id', AuthMiddleware.validateToken, CompanyController.deleteCompany);


module.exports = CompanyRoutes;