const Sequelize = require('sequelize');
const DatabaseConfig = require('../config/DatabaseConfig');

const UserModel = require('../app/models/UserModel');
const LogModel = require('../app/models/LogModel');
const SessionModel = require('../app/models/SessionModel');
const AreaModel = require('../app/models/AreaModel');
const ColaboratorModel = require('../app/models/ColaboratorModel');
const CompanyModel = require('../app/models/CompanyModel');
const ResetTokenModel = require('../app/models/ResetToken');
const ItemModel = require('../app/models/ItemModel');
const SubItemModel = require('../app/models/SubitemModel');
const ClientModel = require('../app/models/ClientModel');
const AreasColaboratorsModel = require('../app/models/AreasColaboratorsModel');
const CompaniesColaboratorsModel = require('../app/models/CompaniesColaboratorsModel');

const connection = new Sequelize(DatabaseConfig);

UserModel.init(connection);
LogModel.init(connection);
SessionModel.init(connection);
AreaModel.init(connection);
ColaboratorModel.init(connection);
CompanyModel.init(connection);
ResetTokenModel.init(connection);
ItemModel.init(connection);
SubItemModel.init(connection);
ClientModel.init(connection);
AreasColaboratorsModel.init(connection);
CompaniesColaboratorsModel.init(connection);

LogModel.associate(connection.models);
SessionModel.associate(connection.models);
AreaModel.associate(connection.models);
ColaboratorModel.associate(connection.models);
CompanyModel.associate(connection.models);
ResetTokenModel.associate(connection.models);
SubItemModel.associate(connection.models);
ClientModel.associate(connection.models);

module.exports = connection;