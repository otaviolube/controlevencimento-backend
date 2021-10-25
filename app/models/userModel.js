module.exports.userModel = function(connection){
	var sequelize = require('sequelize');

	return connection.define('users', {
        userName: {
            type: sequelize.STRING,
        },
        email: {
            type: sequelize.STRING,
        },
        permission: {
            type: sequelize.INTEGER
        },
        createdAt: {
            type: sequelize.DATE
        }
	});
}