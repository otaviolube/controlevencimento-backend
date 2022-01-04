const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const UserModel = require('../app/models/UserModel');

const connection = new Sequelize(dbConfig);



module.exports = connection;