function collaborator(app, connection) {
    this._Sequelize = require('sequelize');
    this._Connection = connection;
    this._Company = app.app.models.companysModel.companysModel(connection)
    this._Collaborator = app.app.models.collaboratorsModel.collaboratorsModel(connection);
}

collaborator.prototype.get = function() {
    this._Collaborator.belongsTo(this._Company);
    return this._Collaborator.findAll({
            order: [
                ['collaborator']
            ],
            include: [{
                model: this._Company,
                required: true
            }],
        })
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

collaborator.prototype.getStatus = function() {
    return this._Collaborator.findAll({
        where: {
            status: 1
        }
    }).then(function(colaborador) {
        return JSON.parse(JSON.stringify(colaborador, null, 4));
    }).error(function(err) {
        return ('error');
    });
}

collaborator.prototype.getcompanyId = function(id) {
    return this._Collaborator.findAll({ where: { companyId: id } })
        .then(function(colaborador) {
            return JSON.parse(JSON.stringify(colaborador, null, 4));
        }).error(function(err) {
            return ('error');
        });
}

collaborator.prototype.cadastrar = function(dado) {
    var data = new Date();
    return this._Collaborator.create({
            companyId: dado.companyId,
            collaborator: dado.collaborator,
            phone: dado.phone,
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
            companyId: dado.companyId,
            collaborator: dado.collaborator,
            phone: dado.phone,
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