//var mysql = require('mysql');

var sequelize = require('sequelize');
var config = require('../config/database.js');

var connMySQL = function() {

    config.database = 'controlecompet';

    var connection = new sequelize(config);

    return connection;

}

module.exports = function() {
    return connMySQL;
}