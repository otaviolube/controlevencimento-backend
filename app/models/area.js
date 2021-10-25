function area(app, connection) {
    this._Sequelize = require('sequelize');
    this._Connection = connection;
    this._Area = app.app.models.areasModel.areasModel(connection);
}

area.prototype.get = function() {
    return this._Area.findAll({
            order: [
                ['area']
            ]
        })
        .then(function(area) {
            return JSON.parse(JSON.stringify(area, null, 4));
        }).error(function(err) {
            return ('error');
        });
}

area.prototype.getAtivo = function() {
    return this._Area.findAll({
            order: [
                ['area']
            ],
            where: { situation: 1 }
        })
        .then(function(area) {
            return JSON.parse(JSON.stringify(area, null, 4));
        }).error(function(err) {
            return ('error');
        });
}

area.prototype.getId = function(id) {
    return this._Area.findByPk(id)
        .then(function(area) {
            return JSON.parse(JSON.stringify(area, null, 4));
        }).error(function(err) {
            return ('error');
        });
}

area.prototype.getStatus = function() {
    return this._Area.findAll({
        where: {
            status: 1
        }
    }).then(function(area) {
        return JSON.parse(JSON.stringify(area, null, 4));
    }).error(function(err) {
        return ('error');
    });
}

area.prototype.cadastrar = function(dado) {
    var data = new Date();
    return this._Area.create({
            area: dado.area,
            situation: dado.situation,
            createdAt: data,
            updatedAt: data
        })
        .then(function(area) {
            return area
        }).error(function(err) {
            return ('error');
        });
}

area.prototype.atualizar = function(dado) {
    var data = new Date();
    return this._Area.update({
            area: dado.area,
            situation: dado.situation,
            createdAt: data,
            updatedAt: data
        }, { where: { id: dado.id } })
        .then(function(area) {
            return area
        }).error(function(err) {
            return ('error');
        });
}

area.prototype.deletar = function(id) {
    return this._Area.destroy({ where: { id: id } })
        .then(function(area) {
            return true
        }).error(function(err) {
            return false;
        });
}

module.exports = function() {
    return area;
}