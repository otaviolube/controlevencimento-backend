module.exports.idEmpresa = async function(app, req, res) {
    var connection = app.config.dbConnection();
 
    var companysModel = new app.app.models.company(app, connection);
    var id = req.params.id;
    var empresas = await companysModel.getId(id)
    if (empresas) {
        res.json({
            status: "OK",
            empresas: empresas
        })
    } else {
        res.json({
            status: "Empresa Inexistente!",
        })
    }

}

module.exports.lerEmpresa = async function(app, req, res) {
    var connection = app.config.dbConnection();

    var companysModel = new app.app.models.company(app, connection);

    var empresas = await companysModel.get()

    res.json({
        status: "OK",
        empresas: empresas
    }) 
}

module.exports.lerEmpresaAtivo = async function(app, req, res) {
    var connection = app.config.dbConnection();

    var companysModel = new app.app.models.company(app, connection);

    var empresas = await companysModel.getAtivo()

    res.json({
        status: "OK",
        empresas: empresas
    }) 
}

module.exports.atualizar = async function(app, req, res) {
    var connection = app.config.dbConnection();

    var companysModel = new app.app.models.company(app, connection);
    var cadastro = req.body;
    console.log(cadastro);
    var empresas = await companysModel.atualizar(cadastro)

    res.json({
        status: "OK",
        empresas: empresas
    })
}

module.exports.deletar = async function(app, req, res) {
    var connection = app.config.dbConnection();

    var companysModel = new app.app.models.company(app, connection);
    var id = req.params.id;

    var empresas = await companysModel.deletar(id)

    res.json({
        status: "OK",
        empresas: empresas
    })
}

module.exports.cadastrar = async function(app, req, res) {
    var connection = app.config.dbConnection();

    var companysModel = new app.app.models.company(app, connection);
    console.log("",req.body);
    var cadastro = req.body;

    var empresas = await companysModel.cadastrar(cadastro)

    res.json({
        status: "OK",
        empresas: empresas
    })
}

