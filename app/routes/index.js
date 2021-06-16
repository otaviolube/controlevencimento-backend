module.exports = function(app) {
    /* const multer = require('../../config/saveImage'); */

    function verifyJwt(req, res, next) {
        // procurar a propriedade token em partes diferentes do pedido
        var token = req.body.token || req.query.token || req.headers['x-access-token'];
        // descodificar caso haja um valor no request
        if (token) {
            // verifies secret and checks exp
            jwt.verify(token, app.get('key'), function(err, decoded) {
                if (err) { // erro!
                    return res.json({ success: false, message: 'Falha na autenticação do token.' });
                } else {
                    // tudo ok! vamos passar esse valor para o req.decoded para ser usado no resto da aplicação
                    req.decoded = decoded;
                    next();
                }
            });
        } else {
            // se não houver token no pedido/request, retornar erro
            return res.status(403).json({
                success: false,
                message: 'Token não encontrado.'
            });

        }
    }

    let express = require('express');
    let cors = require('cors');
    let multer = require('multer');

    let upload = multer({ dest: './uploads/' });
    /* let app = express(); */
    app.use(cors());


    // Rotas Contrato

    app.get('/contrato', function(req, res) {
        app.app.controllers.contractController.lerContrato(app, req, res);
    });

    app.get('/idContrato/:id', function(req, res) {
        app.app.controllers.contractController.idContrato(app, req, res);
    });

    app.post('/contrato', function(req, res) {
        app.app.controllers.contractController.cadastrar(app, req, res);
    });

    app.patch('/contrato', function(req, res) {
        app.app.controllers.contractController.atualizar(app, req, res);
    });

    app.delete('/contrato/:id', function(req, res) {
        app.app.controllers.contractController.deletar(app, req, res);
    });

   

   // Rotas Colaborador

   app.get('/colaborador', function(req, res) {
    app.app.controllers.collaboratorController.lerColaborador(app, req, res);
});

app.get('/idColaborador/:id', function(req, res) {
    app.app.controllers.collaboratorController.idColaborador(app, req, res);
});

app.post('/colaborador', function(req, res) {
    app.app.controllers.collaboratorController.cadastrar(app, req, res);
});

app.patch('/colaborador', function(req, res) {
    app.app.controllers.collaboratorController.atualizar(app, req, res);
});

app.delete('/colaborador/:id', function(req, res) {
    app.app.controllers.collaboratorController.deletar(app, req, res);
});

   // Rotas Tipos Item

   app.get('/tipoItem', function(req, res) {
    app.app.controllers.itemtypeController.lerTipoItem(app, req, res);
});

app.get('/idtipoItem/:id', function(req, res) {
    app.app.controllers.itemtypeController.idTipoItem(app, req, res);
});

app.post('/tipoItem', function(req, res) {
    app.app.controllers.itemtypeController.cadastrar(app, req, res);
});

app.patch('/tipoItem', function(req, res) {
    app.app.controllers.itemtypeController.atualizar(app, req, res);
});

app.delete('/tipoItem/:id', function(req, res) {
    app.app.controllers.itemtypeController.deletar(app, req, res);
});

 // Rotas Empresa

 app.get('/empresaAtivo', function(req, res) {
    app.app.controllers.companyController.lerEmpresaAtivo(app, req, res);
});

app.get('/empresa', function(req, res) {
    app.app.controllers.companyController.lerEmpresa(app, req, res);
});

app.get('/idEmpresa/:id', function(req, res) {
    app.app.controllers.companyController.idEmpresa(app, req, res);
});

app.post('/empresa', function(req, res) {
    app.app.controllers.companyController.cadastrar(app, req, res);
});

app.patch('/empresa', function(req, res) {
    app.app.controllers.companyController.atualizar(app, req, res);
});

app.delete('/empresa/:id', function(req, res) {
    app.app.controllers.companyController.deletar(app, req, res);
});

}