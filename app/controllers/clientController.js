
module.exports.idCliente = async function(app, req, res) {
    var connection = app.config.dbConnection();
 
    var clientModel = new app.app.models.clients(app, connection);
    var id = req.params.id;
    var clientes = await clientModel.getId(id)
    if (clientes) {
        res.json({
            status: "OK",
            clientes: clientes
        })
    } else {
        res.json({
            status: "Cliente Inexistente!",
        })
    }

}

module.exports.lerCliente = async function(app, req, res) {
    var connection = app.config.dbConnection();

    var clientModel = new app.app.models.clients(app, connection);

    var clientes = await clientModel.get()

    res.json({
        status: "OK",
        clientes: clientes
    }) 
}

module.exports.cadastrar = async function(app, req, res) {
    var connection = app.config.dbConnection();

    var clientModel = new app.app.models.clients(app, connection);
    console.log("",req.body);
    var cadastro = req.body;

    var clientes = await clientModel.cadastrar(cadastro)

    res.json({
        status: "OK",
        clientes: clientes
    })
}

module.exports.atualizar = async function(app, req, res) {
    var connection = app.config.dbConnection();

    var clientModel = new app.app.models.clients(app, connection);
    var cadastro = req.body;

    var clientes = await clientModel.atualizar(cadastro)

    res.json({
        status: "OK",
        clientes: clientes
    })
}

module.exports.deletar = async function(app, req, res) {
    var connection = app.config.dbConnection();

    var clientModel = new app.app.models.clients(app, connection);
    var id = req.params.id;

    var clientes = await clientModel.deletar(id)

    res.json({
        status: "OK",
        clientes: clientes
    })
}