module.exports.idControleEmpresa = async function(app, req, res) {
    var connection = app.config.dbConnection();
 
    var controlCompanysModel = new app.app.models.controlCompanys(app, connection);
    var id = req.params.id;
    var controleEmpresas = await controlCompanysModel.getId(id)
    if (controleEmpresas) {
        res.json({
            status: "OK",
            controleEmpresas: controleEmpresas
        })
    } else {
        res.json({
            status: "Controle Empresa Inexistente!",
        })
    }

}

module.exports.lerControleEmpresa = async function(app, req, res) {
    var connection = app.config.dbConnection();
    var companysModel = new app.app.models.company(app, connection);

    var controlCompanysModel = new app.app.models.controlCompanys(app, connection);

    var controleEmpresas = await controlCompanysModel.get()
    for(var i =0; i < controleEmpresas.length; i++) {
        controleEmpresas[i].contract.company = await companysModel.getId(controleEmpresas[i].contract.companyId);
    }
    
    res.json({
        status: "OK",
        controleEmpresas: controleEmpresas
    }) 
}

module.exports.atualizar = async function(app, req, res) {
    var connection = app.config.dbConnection();

    var controlCompanysModel = new app.app.models.controlCompanys(app, connection);
    var cadastro = req.body;

    var controleEmpresas = await controlCompanysModel.atualizar(cadastro)

    res.json({
        status: "OK",
        controleEmpresas: controleEmpresas
    })
}

module.exports.deletar = async function(app, req, res) {
    var connection = app.config.dbConnection();

    var controlCompanysModel = new app.app.models.controlCompanys(app, connection);
    var id = req.params.id;

    var controleEmpresas = await controlCompanysModel.deletar(id)

    res.json({
        status: "OK",
        controleEmpresas: controleEmpresas
    })
}

module.exports.cadastrar = async function(app, req, res) {
    var connection = app.config.dbConnection();

    var controlCompanysModel = new app.app.models.controlCompanys(app, connection);
    
    var cadastro = req.body;

    var controleEmpresas = await controlCompanysModel.cadastrar(cadastro)
    

    res.json({
        status: "OK",
        controleEmpresas: controleEmpresas
    })
}
