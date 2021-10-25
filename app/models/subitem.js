function subitem(app, connection) {
    this._Sequelize = require('sequelize');
    this._Connection = connection;
    this._SubItem = app.app.models.subItemModel.subItemModel(connection);
}

subitem.prototype.get = function() {
    return this._SubItem.findAll()
        .then(function(subitem) {
            return JSON.parse(JSON.stringify(subitem, null, 4));
        }).error(function(err) {
            return ('error');
        });
}

subitem.prototype.getAtivo = function() {
    return this._SubItem.findAll({
        where: {situation:1}
    })
        .then(function(subitem) {
            return JSON.parse(JSON.stringify(subitem, null, 4));
        }).error(function(err) {
            return ('error');
        });
}

subitem.prototype.getStatus = function() {
    return this._SubItem.findAll({
        where: {
            status: 1
        }
    }).then(function(subitem) {
            return JSON.parse(JSON.stringify(subitem, null, 4));
        }).error(function(err) {
            return ('error');
        });
}

subitem.prototype.getId = function(id) {
    return this._SubItem.findByPk(id)
        .then(function(subitem) {
            return JSON.parse(JSON.stringify(subitem, null, 4));
        }).error(function(err) {
            return ('error');
        });
}

subitem.prototype.cadastrar = function(dado) {
    var data = new Date();
    return this._SubItem.create({
            subitem: dado.subitem,
            situation: dado.situation,
            createdAt: data,
            updatedAt: data
        })
        .then(function(subitem) {
            return subitem
        }).error(function(err) {
            return ('error');
        });
}

subitem.prototype.atualizar = function(dado) {
    var data = new Date();
    return this._SubItem.update({
            subitem: dado.subitem,
            situation: dado.situation,
            createdAt: data,
            updatedAt: data
        }, { where: { id: dado.id } })
        .then(function(subitem) {
            return subitem
        }).error(function(err) {
            return ('error');
        });
}

subitem.prototype.deletar = function(id) {
    return this._SubItem.destroy({ where: { id: id } })
        .then(function(subitem) {
            return true
        }).error(function(err) {
            return false;
        });
}

module.exports = function() {
    return subitem;
}