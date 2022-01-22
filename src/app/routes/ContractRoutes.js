const ContractRoutes = require('express').Router();
const ContractController = require('../controllers/ContractController');

ContractRoutes.get('/contracts', ContractController.getContracts);
ContractRoutes.get('/contract/:id', ContractController.getContract);
ContractRoutes.post('/contracts', ContractController.creatContract);
ContractRoutes.patch('/contract/:id', ContractController.updateContract);
ContractRoutes.delete('/contract/:id', ContractController.deleteContract);

module.exports = ContractRoutes;