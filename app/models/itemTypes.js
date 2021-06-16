function itemtype(app, connection) {
    this._Sequelize = require('sequelize');
    this._Connection = connection;
    this._Itemtype = app.app.models.itemTypesModel.itemTypesModel(connection);
}

itemtype.prototype.get = function() {
    return this._Itemtype.findAll()
        .then(function(itemtypes) {
            return JSON.parse(JSON.stringify(itemtypes, null, 4));
        }).error(function(err) {
            return ('error');
        });
}

itemtype.prototype.getId = function(id) {
    return this._Itemtype.findByPk(id)
        .then(function(itemtypes) {
            return JSON.parse(JSON.stringify(itemtypes, null, 4));
        }).error(function(err) {
            return ('error');
        });
}

itemtype.prototype.cadastrar = function(dado) {
    var data = new Date();
    return this._Itemtype.create({
            type: dado.type,
            item: dado.item,
            situation: dado.situation,
            createdAt: data,
            updatedAt: data
        })
        .then(function(itemtypes) {
            return itemtypes
        }).error(function(err) {
            return ('error');
        });
}

itemtype.prototype.atualizar = function(dado) {
    var data = new Date();
    return this._Itemtype.update({
            type: dado.type,
            item: dado.item,
            situation: dado.situation,
            createdAt: data,
            updatedAt: data
        }, { where: { id: dado.id } })
        .then(function(itemtypes) {
            return itemtypes
        }).error(function(err) {
            return ('error');
        });
}

itemtype.prototype.deletar = function(id) {
    return this._Itemtype.destroy({ where: { id: id } })
        .then(function(itemtypes) {
            return true
        }).error(function(err) {
            return false;
        });
}

module.exports = function() {
    return itemtype;
}