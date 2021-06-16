
module.exports.idContrato = async function(app, req, res) {
    var connection = app.config.dbConnection();
 
    var contractModel = new app.app.models.contract(app, connection);
    var id = req.params.id;
    var contratos = await contractModel.getId(id)
    if (contratos) {
        res.json({
            status: "OK",
            contratos: contratos
        })
    } else {
        res.json({
            status: "Contrato Inexistente!",
        })
    }

}

module.exports.lerContrato = async function(app, req, res) {
    var connection = app.config.dbConnection();

    var contractModel = new app.app.models.contract(app, connection);

    var contratos = await contractModel.get()

    res.json({
        status: "OK",
        contratos: contratos
    }) 
}

module.exports.cadastrar = async function(app, req, res) {
    var connection = app.config.dbConnection();

    var contractModel = new app.app.models.contract(app, connection);
    console.log("",req.body);
    var cadastro = req.body;

    var contratos = await contractModel.cadastrar(cadastro)

    res.json({
        status: "OK",
        contratos: contratos
    })
}

module.exports.atualizar = async function(app, req, res) {
    var connection = app.config.dbConnection();

    var contractModel = new app.app.models.contract(app, connection);
    var cadastro = req.body;

    var contratos = await contractModel.atualizar(cadastro)

    res.json({
        status: "OK",
        contratos: contratos
    })
}

module.exports.deletar = async function(app, req, res) {
    var connection = app.config.dbConnection();

    var contractModel = new app.app.models.contract(app, connection);
    var id = req.params.id;

    var contratos = await contractModel.deletar(id)

    res.json({
        status: "OK",
        contratos: contratos
    })
}