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
    var empresas = await companysModel.atualizar(cadastro)

    res.json({
        status: "OK",
        empresas: empresas
    })
}


module.exports.deletar = async function(app, req, res) {
    var connection = app.config.dbConnection();
    var contractModel = new app.app.models.contract(app, connection);

    var companysModel = new app.app.models.company(app, connection);
    var id = req.params.id;


    var validar = await contractModel.getcompanyId(id)
    if(validar.length == 0){
        var empresas = await companysModel.deletar(id)
    
        res.json({
            status: "Registro apagado com sucesso!",
            message: 'message.sucesso',
            empresas: empresas
        })
    }else{
        res.json({
            status: "Este dado está vinculado a um Contrato.",
            message:'message.erro'
        })
    }
}


module.exports.cadastrar = async function(app, req, res) {
    var connection = app.config.dbConnection();

    var companysModel = new app.app.models.company(app, connection);
    var cadastro = req.body;

    var empresas = await companysModel.cadastrar(cadastro)

    res.json({
        status: "OK",
        empresas: empresas
    })
}

