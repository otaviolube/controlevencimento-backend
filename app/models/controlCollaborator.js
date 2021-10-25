function controlCollaborator(app, connection) {
    this._Sequelize = require('sequelize');
    this._Connection = connection;
    this._ControlCollaborator = app.app.models.controlCollaboratorsModel.controlCollaboratorsModel(connection);
    this._Collaborator = app.app.models.collaboratorsModel.collaboratorsModel(connection);
    this._Area = app.app.models.areasModel.areasModel(connection);
    this._Item = app.app.models.itemModel.itemModel(connection);
    this._SubItem = app.app.models.subItemModel.subItemModel(connection);
}


controlCollaborator.prototype.get = function() {
    this._ControlCollaborator.belongsTo(this._Collaborator);
    this._ControlCollaborator.belongsTo(this._Area);
    this._ControlCollaborator.belongsTo(this._Item);
    this._ControlCollaborator.belongsTo(this._SubItem);
    return this._ControlCollaborator.findAll({
        include: [{
            model: this._Collaborator,
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
    .then(function(controleColaborador) {
        return JSON.parse(JSON.stringify(controleColaborador, null, 4));
    }).error(function(err) {
        return ('error');
    });
}
//*---------- verificar se as variáveis estão Inativadas -----------------------------------------------
controlCollaborator.prototype.getareaId = function(id) {
    return this._ControlCollaborator.findAll( { where: { areaId: id } })
        .then(function(controleColaborador) {
            return JSON.parse(JSON.stringify(controleColaborador, null, 4));
        }).error(function(err) {
            return ('error');
        });
}

controlCollaborator.prototype.getitemId = function(id) {
    return this._ControlCollaborator.findAll( { where: { itemId: id } })
        .then(function(controleColaborador) {
            return JSON.parse(JSON.stringify(controleColaborador, null, 4));
        }).error(function(err) {
            return ('error');
        });
}

controlCollaborator.prototype.getsubitemId = function(id) {
    return this._ControlCollaborator.findAll( { where: { subitenId: id } })
        .then(function(controleColaborador) {
            return JSON.parse(JSON.stringify(controleColaborador, null, 4));
        }).error(function(err) {
            return ('error');
        });
}
//-----------------------------------------------------------------------------------------------------------

controlCollaborator.prototype.getcollaboratorId = function(id) {
    return this._ControlCollaborator.findAll( { where: { collaboratorId: id } })
        .then(function(controleColaborador) {
            return JSON.parse(JSON.stringify(controleColaborador, null, 4));
        }).error(function(err) {
            return ('error');
        });
}

controlCollaborator.prototype.getareaId = function(id) {
    return this._ControlCollaborator.findAll( { where: { areaId: id } })
        .then(function(controleColaborador) {
            return JSON.parse(JSON.stringify(controleColaborador, null, 4));
        }).error(function(err) {
            return ('error');
        });
}

controlCollaborator.prototype.getitemId = function(id) {
    return this._ControlCollaborator.findAll( { where: { itemId: id } })
        .then(function(controleColaborador) {
            return JSON.parse(JSON.stringify(controleColaborador, null, 4));
        }).error(function(err) {
            return ('error');
        });
}

controlCollaborator.prototype.getsubitenId = function(id) {
    return this._ControlCollaborator.findAll( { where: { subitenId: id } })
        .then(function(controleColaborador) {
            return JSON.parse(JSON.stringify(controleColaborador, null, 4));
        }).error(function(err) {
            return ('error');
        });
}

controlCollaborator.prototype.getId = function(id) {
    return this._ControlCollaborator.findByPk(id)
        .then(function(controleColaborador) {
            return JSON.parse(JSON.stringify(controleColaborador, null, 4));
        }).error(function(err) {
            return ('error');
        });
}

controlCollaborator.prototype.cadastrar = function(dado) {
    var data = new Date();
    return this._ControlCollaborator.create({
            collaboratorId: dado.collaboratorId,
            areaId: dado.areaId,
            itemId: dado.itemId,
            subitenId: dado.subitenId,
            datePerformed: dado.datePerformed,
            valid: dado.valid,
            createdAt: data,
            updatedAt: data
        })
        .then(function(controleColaborador) {
            return controleColaborador
        }).error(function(err) {
            return ('error');
        });
}

controlCollaborator.prototype.atualizar = function(dado) {
    var data = new Date();
    return this._ControlCollaborator.update({
            collaboratorId: dado.collaboratorId,
            areaId: dado.areaId,
            itemId: dado.itemId,
            subitenId: dado.subitenId,
            datePerformed: dado.datePerformed,
            valid: dado.valid,
            createdAt: data,
            updatedAt: data
        }, { where: { id: dado.id } })
        .then(function(controleColaborador) {
            return controleColaborador
        }).error(function(err) {
            return ('error');
        });
}

controlCollaborator.prototype.deletar = function(id) {
    return this._ControlCollaborator.destroy({ where: { id: id } })
        .then(function(controleColaborador) {
            return true
        }).error(function(err) {
            return false;
        });
}

module.exports = function() {
    return controlCollaborator;
}