module.exports.idArea = async function(app, req, res) {
    var connection = app.config.dbConnection();
 
    var areasModel = new app.app.models.area(app, connection);
    var id = req.params.id;
    var area = await areasModel.getId(id)
    if (area) {
        res.json({
            status: "OK",
            area: area
        })
    } else {
        res.json({
            status: "Área Inexistente!",
        })
    }

}


module.exports.lerAreaAtivo = async function(app, req, res) {
    var connection = app.config.dbConnection();

    var areasModel = new app.app.models.area(app, connection);

    var area = await areasModel.getAtivo()

    res.json({
        status: "OK",
        area: area
    }) 
}

module.exports.lerArea = async function(app, req, res) {
    var connection = app.config.dbConnection();

    var areasModel = new app.app.models.area(app, connection);

    var area = await areasModel.get()

    res.json({
        status: "OK",
        area: area
    }) 
}

module.exports.atualizar = async function(app, req, res) {
    var connection = app.config.dbConnection();

    var areasModel = new app.app.models.area(app, connection);
    var cadastro = req.body;
    console.log(cadastro);
    var area = await areasModel.atualizar(cadastro)

    res.json({
        status: "OK",
        area: area
    })
}

module.exports.deletar = async function(app, req, res) {
    var connection = app.config.dbConnection();
    var controlCollaboratorsModel = new app.app.models.controlCollaborator(app, connection);

    var areasModel = new app.app.models.area(app, connection);
    var id = req.params.id;


    var validar = await controlCollaboratorsModel.getareaId(id)
    if(validar.length == 0){
        var area = await areasModel.deletar(id)
    
        res.json({
            status: "Registro apagado com sucesso!",
            message: 'message.sucesso',
            area: area
        })
    }else{
        res.json({
            status: "Este dado está vinculado a um outro Elemento.",
            message:'message.erro'
        })
    }
}

module.exports.cadastrar = async function(app, req, res) {
    var connection = app.config.dbConnection();

    var areasModel = new app.app.models.area(app, connection);
    var cadastro = req.body;

    var area = await areasModel.cadastrar(cadastro)

    res.json({
        status: "OK",
        area: area
    })
}

