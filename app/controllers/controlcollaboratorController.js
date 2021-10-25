module.exports.idControleColaborador = async function(app, req, res) {
    var connection = app.config.dbConnection();
 
    var controlCollaboratorsModel = new app.app.models.controlCollaborator(app, connection);
    var id = req.params.id;
    var controleColaboradores = await controlCollaboratorsModel.getId(id)
    if (controleColaboradores) {
        res.json({
            status: "OK",
            controleColaboradores: controleColaboradores
        })
    } else {
        res.json({
            status: "Controle Colaborador Inexistente!",
        })
    }

}

module.exports.lerControleColaborador = async function(app, req, res) {
    var connection = app.config.dbConnection();

    var controlCollaboratorsModel = new app.app.models.controlCollaborator(app, connection);

    var controleColaboradores = await controlCollaboratorsModel.get()
    
    res.json({
        status: "OK",
        controleColaboradores: controleColaboradores
    }) 
}

module.exports.atualizar = async function(app, req, res) {
    var connection = app.config.dbConnection();

    var controlCollaboratorsModel = new app.app.models.controlCollaborator(app, connection);
    var cadastro = req.body;
   

    var controleColaboradores = await controlCollaboratorsModel.atualizar(cadastro)

    res.json({
        status: "OK",
        controleColaboradores: controleColaboradores
    })
}

module.exports.deletar = async function(app, req, res) {
    var connection = app.config.dbConnection();

    var controlCollaboratorsModel = new app.app.models.controlCollaborator(app, connection);
    var id = req.params.id;

    var controleColaboradores = await controlCollaboratorsModel.deletar(id)

    res.json({
        status: "OK",
        controleColaboradores: controleColaboradores
    })
}

module.exports.cadastrar = async function(app, req, res) {
    var connection = app.config.dbConnection();

    var controlCollaboratorsModel = new app.app.models.controlCollaborator(app, connection);
    
    
    var cadastro = req.body;

    var controleColaboradores = await controlCollaboratorsModel.cadastrar(cadastro)
    

    res.json({
        status: "OK",
        controleColaboradores: controleColaboradores
    })
}

