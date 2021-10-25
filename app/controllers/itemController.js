module.exports.idItem = async function(app, req, res) {
    var connection = app.config.dbConnection();
 
    var itemModel = new app.app.models.item(app, connection);
    var id = req.params.id;
    var item = await itemModel.getId(id)
    if (item) {
        res.json({
            status: "OK",
            item: item
        })
    } else {
        res.json({
            status: "Item Inexistente!",
        })
    }

}

module.exports.lerItemAtivo = async function(app, req, res) {
    var connection = app.config.dbConnection();

    var itemModel = new app.app.models.item(app, connection);

    var item = await itemModel.getAtivo()
    res.json({
        status: "OK",
        item: item
    }) 
}

module.exports.lerItem = async function(app, req, res) {
    var connection = app.config.dbConnection();
    var itemModel = new app.app.models.item(app, connection);
    var item = await itemModel.get();
    
    res.json({
        status: "OK",
        item: item
    }) 
}

module.exports.atualizar = async function(app, req, res) {
    var connection = app.config.dbConnection();

    var itemModel = new app.app.models.item(app, connection);
    var cadastro = req.body;
    
    var item = await itemModel.atualizar(cadastro)

    res.json({
        status: "OK",
        item: item
    })
}

module.exports.deletar = async function(app, req, res) {
    var connection = app.config.dbConnection();
    var controlCollaboratorsModel = new app.app.models.controlCollaborator(app, connection);
    var controlcompaniesModel = new app.app.models.controlCompanys(app, connection);

    var itemModel = new app.app.models.item(app, connection);
    var id = req.params.id;


    var validar = await controlCollaboratorsModel.getitemId(id)
    if(validar.length == 0 ){
        var item = await itemModel.deletar(id)
    
        res.json({
            status: "Registro apagado com sucesso!",
            message: 'message.sucesso',
            item: item
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

    var itemModel = new app.app.models.item(app, connection);
    var cadastro = req.body;
    console.log(cadastro)
    var item = await itemModel.cadastrar(cadastro)
    console.log(item)

    res.json({
        status: "OK",
        item: item
    })
}

