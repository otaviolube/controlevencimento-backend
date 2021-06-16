module.exports.contractModel = function(connection){
	var sequelize = require('sequelize');

	return connection.define('contracts', {
        companyId: {
            type: sequelize.INTEGER,
        },

        contract: {
            type: sequelize.STRING,
        },
        manager: {
            type: sequelize.STRING,
        },
        administrator: {
            type: sequelize.STRING,
        },
        situation: {
            type: sequelize.INTEGER,
        },
        createdAt: {
            type: sequelize.DATE
        }
	});
}