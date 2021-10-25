function company(app, connection) {
    this._Sequelize = require('sequelize');
    this._Connection = connection;
    this._Company = app.app.models.companysModel.companysModel(connection);
}

company.prototype.get = function() {
    return this._Company.findAll({
        order: [
            ['name']
        ]
    }).then(function(empresas) {
        return JSON.parse(JSON.stringify(empresas, null, 4));
    }).error(function(err) {
        return ('error');
    });
}

company.prototype.getAtivo = function() {
    return this._Company.findAll({
            order: [
                ['name']
            ],
            where: { situation: 1 }
        })
        .then(function(empresas) {
            return JSON.parse(JSON.stringify(empresas, null, 4));
        }).error(function(err) {
            return ('error');
        });
}

company.prototype.getStatus = function() {
    return this._Company.findAll({
        where: {
            status: 1
        }
    }).then(function(empresas) {
        return JSON.parse(JSON.stringify(empresas, null, 4));
    }).error(function(err) {
        return ('error');
    });
}

company.prototype.getId = function(id) {
    return this._Company.findByPk(id)
        .then(function(empresas) {
            return JSON.parse(JSON.stringify(empresas, null, 4));
        }).error(function(err) {
            return ('error');
        });
}

company.prototype.cadastrar = function(dado) {
    var data = new Date();
    return this._Company.create({
            name: dado.name,
            situation: dado.situation,
            createdAt: data,
            updatedAt: data
        })
        .then(function(empresas) {
            return empresas
        }).error(function(err) {
            return ('error');
        });
}

company.prototype.atualizar = function(dado) {
    var data = new Date();
    return this._Company.update({
            name: dado.name,
            situation: dado.situation,
            createdAt: data,
            updatedAt: data
        }, { where: { id: dado.id } })
        .then(function(empresas) {
            return empresas
        }).error(function(err) {
            return ('error');
        });
}

company.prototype.deletar = function(id) {
    return this._Company.destroy({ where: { id: id } })
        .then(function(empresas) {
            return true
        }).error(function(err) {
            return false;
        });
}

module.exports = function() {
    return company;
}