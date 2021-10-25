module.exports.clientsModel = function(connection) {
    var sequelize = require('sequelize');

    return connection.define('clients', {
        client: {
            type: sequelize.STRING,
        },
        manager: {
            type: sequelize.STRING
        },
        administrator: {
            type: sequelize.STRING
        },
        situation: {
            type: sequelize.INTEGER
        },
        createdAt: {
            type: sequelize.DATE
        }
    });
}