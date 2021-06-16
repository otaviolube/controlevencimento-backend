module.exports.companysModel = function(connection){
	var sequelize = require('sequelize');

	return connection.define('companys', {
        name: {
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