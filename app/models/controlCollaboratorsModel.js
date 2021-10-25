module.exports.controlCollaboratorsModel = function(connection){
	var sequelize = require('sequelize');

	return connection.define('controlcollaborators', {
        collaboratorId: {
            type: sequelize.INTEGER,
        },
        areaId: {
            type: sequelize.INTEGER
        },
        itemId: {
            type: sequelize.INTEGER,
        },
        subitenId: {
            type: sequelize.INTEGER,
        },
        datePerformed: {
            type: sequelize.DATE,
        },
        valid: {
            type: sequelize.DATE,
        },
        createdAt: {
            type: sequelize.DATE
        }
	});
}