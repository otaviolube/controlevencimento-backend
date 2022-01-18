const Sequelize = require('sequelize');
const DatabaseConfig = require('../config/DatabaseConfig');

const UserModel = require('../app/models/UserModel');
const LogModel = require('../app/models/LogModel');
const SessionModel = require('../app/models/SessionModel');
const AreaModel = require('../app/models/AreaModel');
const ColaboratorModel = require('../app/models/ColaboratorModel');
const CompanyModel = require('../app/models/CompanyModel');

const connection = new Sequelize(DatabaseConfig);

UserModel.init(connection);
LogModel.init(connection);
SessionModel.init(connection);
AreaModel.init(connection);
ColaboratorModel.init(connection);
CompanyModel.init(connection);

LogModel.associate(connection.models);
SessionModel.associate(connection.models);
AreaModel.associate(connection.models);
ColaboratorModel.associate(connection.models);
CompanyModel.associate(connection.models);

module.exports = connection;