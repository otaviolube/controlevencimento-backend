module.exports.idType = async function(app, req, res) {
    var connection = app.config.dbConnection();
 
    var typeModel = new app.app.models.type(app, connection);
    var id = req.params.id;
    var type = await typeModel.getId(id)
    if (type) {
        res.json({
            status: "OK",
            type: type
        })
    } else {
        res.json({
            status: "type Inexistente!",
        })
    }

}

module.exports.lerType = async function(app, req, res) {
    var connection = app.config.dbConnection();

    var typeModel = new app.app.models.type(app, connection);

    var type = await typeModel.get()

    res.json({
        status: "OK",
        type: type
    }) 
}

module.exports.atualizar = async function(app, req, res) {
    var connection = app.config.dbConnection();

    var typeModel = new app.app.models.type(app, connection);
    var cadastro = req.body;
    console.log(cadastro);
    var type = await typeModel.atualizar(cadastro)

    res.json({
        status: "OK",
        type: type
    })
}

module.exports.deletar = async function(app, req, res) {
    var connection = app.config.dbConnection();

    var typeModel = new app.app.models.type(app, connection);
    var id = req.params.id;

    var type = await typeModel.deletar(id)

    res.json({
        status: "OK",
        type: type
    })
}

module.exports.cadastrar = async function(app, req, res) {
    var connection = app.config.dbConnection();

    var typeModel = new app.app.models.type(app, connection);
    console.log("",req.body);
    var cadastro = req.body;

    var type = await typeModel.cadastrar(cadastro)

    res.json({
        status: "OK",
        type: type
    })
}

