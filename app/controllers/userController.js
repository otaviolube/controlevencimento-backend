module.exports.idUsuario = async function(app, req, res) {
    var connection = app.config.dbConnection();
 
    var usuarioModel = new app.app.models.user(app, connection);
    var id = req.params.id;
    var usuarios = await usuarioModel.getId(id)
    if (usuarios) {
        res.json({
            status: "OK",
            usuarios: usuarios
        })
    } else {
        res.json({
            status: "Usuario Inexistente!",
        })
    }

}

module.exports.lerUsuario = async function(app, req, res) {
    var connection = app.config.dbConnection();

    var usuarioModel = new app.app.models.user(app, connection);

    var usuarios = await usuarioModel.get()

    res.json({
        status: "OK",
        usuarios: usuarios
    }) 
}

module.exports.atualizar = async function(app, req, res) {
    var connection = app.config.dbConnection();

    var usuarioModel = new app.app.models.user(app, connection);
    var cadastro = req.body;
    console.log(cadastro);
    var usuarios = await usuarioModel.atualizar(cadastro)

    res.json({
        status: "OK",
        usuarios: usuarios
    })
}

module.exports.deletar = async function(app, req, res) {
    var connection = app.config.dbConnection();

    var usuarioModel = new app.app.models.user(app, connection);
    var id = req.params.id;

    var usuarios = await usuarioModel.deletar(id)

    res.json({
        status: "OK",
        usuarios: usuarios
    })
}

module.exports.cadastrar = async function(app, req, res) {
    var connection = app.config.dbConnection();

    var usuarioModel = new app.app.models.user(app, connection);
    console.log("",req.body);
    var cadastro = req.body;

    var usuarios = await usuarioModel.cadastrar(cadastro)

    res.json({
        status: "OK",
        usuarios: usuarios
    })
}

