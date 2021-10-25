function contract(app, connection) {
    this._Sequelize = require('sequelize');
    this._Connection = connection;
    this._Company = app.app.models.companysModel.companysModel(connection);
    this._Contract = app.app.models.contractModel.contractModel(connection);
}

contract.prototype.get = function() {
    this._Contract.belongsTo(this._Company);
    return this._Contract.findAll({
        include: [{
            model: this._Company,
            required: true
        }],
    })
        .then(function(contratos) {
            return JSON.parse(JSON.stringify(contratos, null, 4));
        }).error(function(err) {
            return ('error');
        });
}

contract.prototype.getId = function(id) {
    return this._Contract.findByPk(id)
        .then(function(contratos) {
            return JSON.parse(JSON.stringify(contratos, null, 4));
        }).error(function(err) {
            return ('error');
        });
}

contract.prototype.getcompanyId = function(id) {
    return this._Contract.findAll( { where: { companyId: id } })
        .then(function(contratos) {
            return JSON.parse(JSON.stringify(contratos, null, 4));
        }).error(function(err) {
            return ('error');
        });
}

contract.prototype.cadastrar = function(dado) {
    var data = new Date();
    return this._Contract.create({
        companyId: dado.companyId,
        contract: dado.contract,
        manager: dado.manager,
        administrator: dado.administrator,
        situation: dado.situation,
        createdAt: data,
        updatedAt: data,

        })
        .then(function(contratos) {
            return contratos
        }).error(function(err) {
            return ('error');
        });
}

contract.prototype.atualizar = function(dado) {
    var data = new Date();
    return this._Contract.update({
        companyId: dado.companyId,
        contract: dado.contract,
        manager: dado.manager,
        administrator: dado.administrator,
        situation: dado.situation,
        createdAt: data,
        updatedAt: data,

        }, { where: { id: dado.id } })
        .then(function(contratos) {
            return contratos
        }).error(function(err) {
            return ('error');
        });
}

contract.prototype.deletar = function(id) {
    return this._Contract.destroy({ where: { id: id } })
        .then(function(contratos) {
            return true
        }).error(function(err) {
            return false;
        });
}



module.exports = function() {
    return contract;
}