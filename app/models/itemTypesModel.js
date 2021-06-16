module.exports.itemTypesModel = function(connection){
	var sequelize = require('sequelize');

	return connection.define('itemtypes', {
        type: {
            type: sequelize.STRING,
        },
        item: {
            type: sequelize.STRING,
        },
        situation: {
            type: sequelize.INTEGER
        },
        createdAt: {
            type: sequelize.DATE
        }
	});
}