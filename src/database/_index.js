const Sequelize = require('sequelize');
const DatabaseConfig = require('../config/DatabaseConfig');

const UserModel = require('../app/models/UserModel');
const LogModel = require('../app/models/LogModel');
const SessionModel = require('../app/models/SessionModel');

const connection = new Sequelize(DatabaseConfig);

UserModel.init(connection);
LogModel.init(connection);
SessionModel.init(connection);

LogModel.associate(connection.models);
SessionModel.associate(connection.models);

module.exports = connection;