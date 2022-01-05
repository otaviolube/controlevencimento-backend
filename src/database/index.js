const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const UserModel = require('../app/models/UserModel');
const LogModel = require('../app/models/LogModel');

const connection = new Sequelize(dbConfig);

UserModel.init(connection);
LogModel.init(connection);
LogModel.associations(connection.models);

module.exports = connection;