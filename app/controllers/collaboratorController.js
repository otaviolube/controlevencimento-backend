module.exports.idColaborador = async function(app, req, res) {
    var connection = app.config.dbConnection();
 
    var colaboradorModel = new app.app.models.collaborator(app, connection);
    var id = req.params.id;
    var colaboradores = await colaboradorModel.getId(id)
    if (colaboradores) {
        res.json({
            status: "OK",
            colaboradores: colaboradores
        })
    } else {
        res.json({
            status: "colaborador Inexistente!",
        })
    }

}

module.exports.lerColaborador = async function(app, req, res) {
    var connection = app.config.dbConnection();

    var colaboradorModel = new app.app.models.collaborator(app, connection);

    var colaboradores = await colaboradorModel.get()

    res.json({
        status: "OK",
        colaboradores: colaboradores
    }) 
}

module.exports.atualizar = async function(app, req, res) {
    var connection = app.config.dbConnection();

    var colaboradorModel = new app.app.models.collaborator(app, connection);
    var cadastro = req.body;
    console.log(cadastro);
    var colaboradores = await colaboradorModel.atualizar(cadastro)

    res.json({
        status: "OK",
        colaboradores: colaboradores
    })
}


module.exports.deletar = async function(app, req, res) {
    var connection = app.config.dbConnection();
    var controlCollaboratorsModel = new app.app.models.controlCollaborator(app, connection);

    var collaboratorsModel = new app.app.models.collaborator(app, connection);
    var id = req.params.id;


    var validar = await controlCollaboratorsModel.getcollaboratorId(id)
    if(validar.length == 0){
        var subitem = await collaboratorsModel.deletar(id)
    
        res.json({
            status: "Registro apagado com sucesso!",
            message: 'message.sucesso',
            subitem: subitem
        })
    }else{
        res.json({
            status: "Este dado está vinculado a um outro elemento.",
            message:'message.erro'
        })
    }
}

module.exports.cadastrar = async function(app, req, res) {
    var connection = app.config.dbConnection();

    var colaboradorModel = new app.app.models.collaborator(app, connection);
    console.log("",req.body);
    var cadastro = req.body;

    var colaboradores = await colaboradorModel.cadastrar(cadastro)

    res.json({
        status: "OK",
        colaboradores: colaboradores
    })
}

