function type(app, connection) {
    this._Sequelize = require('sequelize');
    this._Connection = connection;
    this._Type = app.app.models.typeModel.typeModel(connection);
}

type.prototype.get = function() {
    return this._Type.findAll()
        .then(function(type) {
            return JSON.parse(JSON.stringify(type, null, 4));
        }).error(function(err) {
            return ('error');
        });
}

type.prototype.getStatus = function() {
    return this._Type.findAll({
        where: {
            status: 1
        }
    }).then(function(type) {
            return JSON.parse(JSON.stringify(type, null, 4));
        }).error(function(err) {
            return ('error');
        });
}

type.prototype.getId = function(id) {
    return this._Type.findByPk(id)
        .then(function(type) {
            return JSON.parse(JSON.stringify(type, null, 4));
        }).error(function(err) {
            return ('error');
        });
}

type.prototype.cadastrar = function(dado) {
    var data = new Date();
    return this._Type.create({
            type: dado.type,
            situation: dado.situation,
            createdAt: data,
            updatedAt: data
        })
        .then(function(type) {
            return type
        }).error(function(err) {
            return ('error');
        });
}

type.prototype.atualizar = function(dado) {
    var data = new Date();
    return this._Type.update({
            type: dado.type,
            situation: dado.situation,
            createdAt: data,
            updatedAt: data
        }, { where: { id: dado.id } })
        .then(function(type) {
            return type
        }).error(function(err) {
            return ('error');
        });
}

type.prototype.deletar = function(id) {
    return this._Type.destroy({ where: { id: id } })
        .then(function(type) {
            return true
        }).error(function(err) {
            return false;
        });
}

module.exports = function() {
    return type;
}