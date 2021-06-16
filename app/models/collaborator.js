function collaborator(app, connection) {
    this._Sequelize = require('sequelize');
    this._Connection = connection;
    this._Collaborator = app.app.models.collaboratorsModel.collaboratorsModel(connection);
}

collaborator.prototype.get = function() {
    return this._Collaborator.findAll()
        .then(function(colaborador) {
            return JSON.parse(JSON.stringify(colaborador, null, 4));
        }).error(function(err) {
            return ('error');
        });
}

collaborator.prototype.getId = function(id) {
    return this._Collaborator.findByPk(id)
        .then(function(colaborador) {
            return JSON.parse(JSON.stringify(colaborador, null, 4));
        }).error(function(err) {
            return ('error');
        });
}

collaborator.prototype.cadastrar = function(dado) {
    var data = new Date();
    return this._Collaborator.create({
            collaborator: dado.collaborator,
            phone: dado.phone,
            cellphone: dado.cellphone,
            email: dado.email,
            permission: dado.permission,
            createdAt: data,
            updatedAt: data
        })
        .then(function(colaborador) {
            return colaborador
        }).error(function(err) {
            return ('error');
        });
}

collaborator.prototype.atualizar = function(dado) {
    var data = new Date();
    return this._Collaborator.update({
        collaborator: dado.collaborator,
        phone: dado.phone,
        cellphone: dado.cellphone,
        email: dado.email,
        permission: dado.permission,
        createdAt: data,
        updatedAt: data
        }, { where: { id: dado.id } })
        .then(function(colaborador) {
            return colaborador
        }).error(function(err) {
            return ('error');
        });
}

collaborator.prototype.deletar = function(id) {
    return this._Collaborator.destroy({ where: { id: id } })
        .then(function(colaborador) {
            return true
        }).error(function(err) {
            return false;
        });
}

module.exports = function() {
    return collaborator;
}