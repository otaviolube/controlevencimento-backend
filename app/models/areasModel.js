module.exports.areasModel = function(connection){
	var sequelize = require('sequelize');

	return connection.define('areas', {
        area: {
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