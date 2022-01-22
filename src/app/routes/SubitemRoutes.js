const SubitemRoutes = require('express').Router();
const SubitemController = require('../controllers/SubitemController');


SubitemRoutes.get('/subitems', SubitemController.getSubitems);
SubitemRoutes.get('/subitem/:id', SubitemController.getSubitem);
SubitemRoutes.post('/subitems', SubitemController.createSubitem);
SubitemRoutes.patch('/subitem/:id', SubitemController.updateSubitem);
SubitemRoutes.delete('/subitem/:id', SubitemController.deleteSubitem);

module.exports = SubitemRoutes;
