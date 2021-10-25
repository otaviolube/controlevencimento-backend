module.exports.subItemModel = function(connection){
	var sequelize = require('sequelize');

	return connection.define('subitens', {
        subitem: {
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