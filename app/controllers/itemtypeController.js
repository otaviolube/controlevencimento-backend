module.exports.idTipoItem = async function(app, req, res) {
    var connection = app.config.dbConnection();
 
    var itemtypeModel = new app.app.models.itemTypes(app, connection);
    var id = req.params.id;
    var itemTypes = await itemtypeModel.getId(id)
    if (itemTypes) {
        res.json({
            status: "OK",
            itemTypes: itemTypes
        })
    } else {
        res.json({
            status: "colaborador Inexistente!",
        })
    }

}

module.exports.lerTipoItem = async function(app, req, res) {
    var connection = app.config.dbConnection();

    var itemtypeModel = new app.app.models.itemTypes(app, connection);

    var itemTypes = await itemtypeModel.get()

    res.json({
        status: "OK",
        itemTypes: itemTypes
    }) 
}

module.exports.atualizar = async function(app, req, res) {
    var connection = app.config.dbConnection();

    var itemtypeModel = new app.app.models.itemTypes(app, connection);
    var cadastro = req.body;
    console.log(cadastro);
    var itemTypes = await itemtypeModel.atualizar(cadastro)

    res.json({
        status: "OK",
        itemTypes: itemTypes
    })
}

module.exports.deletar = async function(app, req, res) {
    var connection = app.config.dbConnection();

    var itemtypeModel = new app.app.models.itemTypes(app, connection);
    var id = req.params.id;

    var itemTypes = await itemtypeModel.deletar(id)

    res.json({
        status: "OK",
        itemTypes: itemTypes
    })
}

module.exports.cadastrar = async function(app, req, res) {
    var connection = app.config.dbConnection();

    var itemtypeModel = new app.app.models.itemTypes(app, connection);
    console.log("",req.body);
    var cadastro = req.body;

    var itemTypes = await itemtypeModel.cadastrar(cadastro)

    res.json({
        status: "OK",
        itemTypes: itemTypes
    })
}

