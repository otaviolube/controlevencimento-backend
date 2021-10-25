function client(app, connection) {
    this._Sequelize = require('sequelize');
    this._Connection = connection;
    this._Client = app.app.models.clientModel.clientsModel(connection);
}

client.prototype.get = function() {
    return this._Client.findAll()
        .then(function(clientes) {
            return JSON.parse(JSON.stringify(clientes, null, 4));
        }).error(function(err) {
            return ('error');
        });
}

client.prototype.getId = function(id) {
    return this._Client.findByPk(id)
        .then(function(clientes) {
            return JSON.parse(JSON.stringify(clientes, null, 4));
        }).error(function(err) {
            return ('error');
        });
}

client.prototype.cadastrar = function(cadastro) {
    var data = new Date();
    return this._Client.create({
            client: cadastro.client,
            manager: cadastro.manager,
            administrator: cadastro.administrator,
            situation: cadastro.situation,
            createdAt: data,
            updatedAt: data
        })
        .then(function(clientes) {
            return clientes
        }).error(function(err) {
            return ('error');
        });
}

client.prototype.atualizar = function(cliente) {
    var data = new Date();
    return this._Client.update({
            client: cliente.client,
            manager: cliente.manager,
            administrator: cliente.administrator,
            situation: cliente.situation,
            updatedAt: data
        }, { where: { id: cliente.id } })
        .then(function(clientes) {
            return clientes
        }).error(function(err) {
            return ('error');
        });
}

client.prototype.deletar = function(id) {
    return this._Client.destroy({ where: { id: id } })
        .then(function(clientes) {
            return true
        }).error(function(err) {
            return false;
        });
}

module.exports = function() {
    return client;
}