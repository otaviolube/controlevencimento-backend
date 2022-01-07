const Sequelize = require('sequelize');
const DatabaseConfig = require('../config/DatabaseConfig');

const UserModel = require('../app/models/UserModel');
const LogModel = require('../app/models/LogModel');

const connection = new Sequelize(DatabaseConfig);

UserModel.init(connection);
LogModel.init(connection);

LogModel.associate(connection.models);

module.exports = connection;