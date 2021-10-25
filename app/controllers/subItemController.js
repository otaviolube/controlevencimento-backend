module.exports.idSubItem = async function(app, req, res) {
    var connection = app.config.dbConnection();
 
    var subItemModel = new app.app.models.subitem(app, connection);
    var id = req.params.id;
    var subitem = await subItemModel.getId(id)
    if (subitem) {
        res.json({
            status: "OK",
            subitem: subitem
        })
    } else {
        res.json({
            status: "subitem Inexistente!",
        })
    }

}

module.exports.lerSubitemAtivo = async function(app, req, res) {
    var connection = app.config.dbConnection();

    var subItemModel = new app.app.models.subitem(app, connection);

    var subitem = await subItemModel.getAtivo()

    res.json({
        status: "OK",
        subitem: subitem
    }) 
}

module.exports.lerSubItem = async function(app, req, res) {
    var connection = app.config.dbConnection();

    var subItemModel = new app.app.models.subitem(app, connection);

    var subitem = await subItemModel.get()

    res.json({
        status: "OK",
        subitem: subitem
    }) 
}

module.exports.atualizar = async function(app, req, res) {
    var connection = app.config.dbConnection();

    var subItemModel = new app.app.models.subitem(app, connection);
    var cadastro = req.body;
    console.log(cadastro);
    var subitem = await subItemModel.atualizar(cadastro)

    res.json({
        status: "OK",
        subitem: subitem
    })
}

module.exports.deletar = async function(app, req, res) {
    var connection = app.config.dbConnection();
    var controlCollaboratorsModel = new app.app.models.controlCollaborator(app, connection);
    var controlcompaniesModel = new app.app.models.controlCompanys(app, connection);

    var subItemModel = new app.app.models.subitem(app, connection);
    var id = req.params.id;


    var validarCollab = await controlCollaboratorsModel.getsubitenId(id)
    var validarCompany = await controlcompaniesModel.getsubitenIdEmpresa(id)


    if(validarCollab.length == 0 && validarCompany.length == 0){
        var subitem = await subItemModel.deletar(id)
        console.log(subitem)
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
    

    var subItemModel = new app.app.models.subitem(app, connection);
    var cadastro = req.body;

    var subitem = await subItemModel.cadastrar(cadastro)

    res.json({
        status: "OK",
        subitem: subitem
    })
}

