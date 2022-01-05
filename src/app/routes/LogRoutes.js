const LogRoutes = require('express').Router();
const LogController = require('../controllers/LogController');

LogRoutes.get('/logs', LogController.getAllLogs);
LogRoutes.post('/logs', LogController.createLog);


module.exports = LogRoutes;