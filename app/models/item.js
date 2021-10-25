function item(app, connection) {
    this._Sequelize = require('sequelize');
    this._Connection = connection;
    this._Item = app.app.models.itemModel.itemModel(connection);
}

item.prototype.get = function() {
    return this._Item.findAll()
        .then(function(item) {
            return JSON.parse(JSON.stringify(item, null, 4));
        }).error(function(err) {
            return ('error');
        });
}

item.prototype.getAtivo = function() {
    return this._Item.findAll({
        where: {situation:1}
    })
        .then(function(item) {
            return JSON.parse(JSON.stringify(item, null, 4));
        }).error(function(err) {
            return ('error');
        });
}

item.prototype.getStatus = function() {
    return this._Item.findAll({
        where: {
            status: 1
        }
    }).then(function(item) {
            return JSON.parse(JSON.stringify(item, null, 4));
        }).error(function(err) {
            return ('error');
        });
}

item.prototype.getId = function(id) {
    return this._Item.findByPk(id)
        .then(function(item) {
            return JSON.parse(JSON.stringify(item, null, 4));
        }).error(function(err) {
            return ('error');
        });
}

item.prototype.cadastrar = function(dado) {
    var data = new Date();
    return this._Item.create({
            item: dado.item,
            situation: dado.situation,
            farol1: dado.farol1,
            farol2: dado.farol2,
            farol3: dado.farol3,
            createdAt: data,
            updatedAt: data
        })
        .then(function(item) {
            return item
        }).error(function(err) {
            return ('error');
        });
}

item.prototype.atualizar = function(dado) {
    var data = new Date();
    return this._Item.update({
            item: dado.item,
            situation: dado.situation,
            farol1: dado.farol1,
            farol2: dado.farol2,
            farol3: dado.farol3,
            createdAt: data,
            updatedAt: data
        }, { where: { id: dado.id } })
        .then(function(item) {
            return item
        }).error(function(err) {
            return ('error');
        });
}

item.prototype.deletar = function(id) {
    return this._Item.destroy({ where: { id: id } })
        .then(function(item) {
            return true
        }).error(function(err) {
            return false;
        });
}

module.exports = function() {
    return item;
}