module.exports.itemModel = function(connection){
	var sequelize = require('sequelize');

	return connection.define('items', { 
        item: {
            type: sequelize.STRING,
        },
        situation: {
            type: sequelize.INTEGER
        },
        farol1: {
            type: sequelize.INTEGER
        },
        farol2: {
            type: sequelize.INTEGER
        },
        farol3: {
            type: sequelize.INTEGER
        },
        createdAt: {
            type: sequelize.DATE
        }
	});
}