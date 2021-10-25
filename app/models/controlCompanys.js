function controlCompanys(app, connection) {
    this._Sequelize = require('sequelize');
    this._Connection = connection;
    this._ControlCompanys = app.app.models.controlcompaniesModel.controlcompaniesModel(connection);
    this._Contract = app.app.models.contractModel.contractModel(connection);
    this._Area = app.app.models.areasModel.areasModel(connection);
    this._Item = app.app.models.itemModel.itemModel(connection);
    this._SubItem = app.app.models.subItemModel.subItemModel(connection);
}


controlCompanys.prototype.get = function() {
    this._ControlCompanys.belongsTo(this._Contract);
    this._ControlCompanys.belongsTo(this._Area);
    this._ControlCompanys.belongsTo(this._Item);
    this._ControlCompanys.belongsTo(this._SubItem);
    return this._ControlCompanys.findAll({
        include: [{
            model: this._Contract,
            required: true,
        },
        {
            model: this._Area,
            required: true,
        },
        {
            model: this._Item,
            required: true,
        },
        {
            model: this._SubItem,
            required: true,
        }
    ],
    })
    .then(function(controleEmpresa) {
        return JSON.parse(JSON.stringify(controleEmpresa, null, 4));
    }).error(function(err) {
        return ('error');
    });
}

//*---------- verificar se as variáveis estão Inativadas -----------------------------------------------


controlCompanys.prototype.getareaId = function(id) {
    return this._ControlCompanys.findAll( { where: { areaId: id } })
        .then(function(controleEmpresa) {
            return JSON.parse(JSON.stringify(controleEmpresa, null, 4));
        }).error(function(err) {
            return ('error');
        });
}

controlCompanys.prototype.getitemId = function(id) {
    return this._ControlCompanys.findAll( { where: { itemId: id } })
        .then(function(controleEmpresa) {
            return JSON.parse(JSON.stringify(controleEmpresa, null, 4));
        }).error(function(err) {
            return ('error');
        });
}

controlCompanys.prototype.getsubitemId = function(id) {
    return this._ControlCompanys.findAll( { where: { subitenId: id } })
        .then(function(controleEmpresa) {
            return JSON.parse(JSON.stringify(controleEmpresa, null, 4));
        }).error(function(err) {
            return ('error');
        });
}

//------------------------------------------------------------------------------------------------------
controlCompanys.prototype.getitemId = function(id) {
    return this._ControlCompanys.findAll( { where: { itemId: id } })
        .then(function(controleEmpresa) {
            return JSON.parse(JSON.stringify(controleEmpresa, null, 4));
        }).error(function(err) {
            return ('error');
        });
}


controlCompanys.prototype.getsubitenIdEmpresa = function(id) {
    return this._ControlCompanys.findAll( { where: { subitenId: id } })
        .then(function(controleEmpresa) {
            return JSON.parse(JSON.stringify(controleEmpresa, null, 4));
        }).error(function(err) {
            return ('error');
        });
}

controlCompanys.prototype.getId = function(id) {
    return this._ControlCompanys.findByPk(id)
        .then(function(controleEmpresa) {
            return JSON.parse(JSON.stringify(controleEmpresa, null, 4));
        }).error(function(err) {
            return ('error');
        });
}

controlCompanys.prototype.cadastrar = function(dado) {
    var data = new Date();
    return this._ControlCompanys.create({
            contractId: dado.contractId,
            areaId: dado.areaId,
            itemId: dado.itemId,
            subitenId: dado.subitenId,
            datePerformed: dado.datePerformed,
            valid: dado.valid,
            createdAt: data,
            updatedAt: data
        })
        .then(function(controleEmpresa) {
            return controleEmpresa
        }).error(function(err) {
            return ('error');
        });
}

controlCompanys.prototype.atualizar = function(dado) {
    var data = new Date();
    return this._ControlCompanys.update({
            contractId: dado.contractId,
            areaId: dado.areaId,
            itemId: dado.itemId,
            subitenId: dado.subitenId,
            datePerformed: dado.datePerformed,
            valid: dado.valid,
            createdAt: data,
            updatedAt: data
        }, { where: { id: dado.id } })
        .then(function(controleEmpresa) {
            return controleEmpresa
        }).error(function(err) {
            return ('error');
        });
}

controlCompanys.prototype.deletar = function(id) {
    return this._ControlCompanys.destroy({ where: { id: id } })
        .then(function(controleEmpresa) {
            return true
        }).error(function(err) {
            return false;
        });
}

module.exports = function() {
    return controlCompanys;
}