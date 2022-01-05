const LogRoutes = require('express').Router();
const LogController = require('../controllers/LogController');

LogRoutes.get('/logs', LogController.getAllLogs);


module.exports = LogRoutes;