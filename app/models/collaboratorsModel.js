module.exports.collaboratorsModel = function(connection){
	var sequelize = require('sequelize');

	return connection.define('collaborators', {
        collaborator: {
            type: sequelize.STRING,
        },
        phone: {
            type: sequelize.STRING,
        },
        cellphone: {
            type: sequelize.STRING,
        },
        email: {
            type: sequelize.STRING,
        },
        permission: {
            type: sequelize.INTEGER,
        },
        createdAt: {
            type: sequelize.DATE
        }
	});
}