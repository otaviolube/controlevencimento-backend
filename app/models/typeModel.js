module.exports.typeModel = function(connection){
	var sequelize = require('sequelize');

	return connection.define('types', {
        type: {
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