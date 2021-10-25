function user(app, connection) {
    this._Sequelize = require('sequelize');
    this._Connection = connection;
    this._Usuario = app.app.models.userModel.userModel(connection);
}

user.prototype.get = function() {
    return this._Usuario.findAll()
        .then(function(usuarios) {
            return JSON.parse(JSON.stringify(usuarios, null, 4));
        }).error(function(err) {
            return ('error');
        });
}

user.prototype.getId = function(id) {
    return this._Usuario.findByPk(id)
        .then(function(usuarios) {
            return JSON.parse(JSON.stringify(usuarios, null, 4));
        }).error(function(err) {
            return ('error');
        });
}

user.prototype.cadastrar = function(dado) {
    var data = new Date();
    return this._Usuario.create({
            userName: dado.userName,
            email: dado.email,
            permission: dado.permission,
            createdAt: data,
            updatedAt: data
        })
        .then(function(usuarios) {
            return usuarios
        }).error(function(err) {
            return ('error');
        });
}

user.prototype.atualizar = function(dado) {
    var data = new Date();
    return this._Usuario.update({
            userName: dado.userName,
            email: dado.email,
            permission: dado.permission,
            createdAt: data,
            updatedAt: data
        }, { where: { id: dado.id } })
        .then(function(usuarios) {
            return usuarios
        }).error(function(err) {
            return ('error');
        });
}

user.prototype.deletar = function(id) {
    return this._Usuario.destroy({ where: { id: id } })
        .then(function(usuarios) {
            return true
        }).error(function(err) {
            return false;
        });
}

module.exports = function() {
    return user;
}