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

   // Rotas  Área

   app.get('/areaAtivo', function(req, res) {
    app.app.controllers.areaController.lerAreaAtivo(app, req, res);
});

   app.get('/area', function(req, res) {
    app.app.controllers.areaController.lerArea(app, req, res);
});

app.get('/idArea/:id', function(req, res) {
    app.app.controllers.areaController.idArea(app, req, res);
});

app.post('/area', function(req, res) {
    app.app.controllers.areaController.cadastrar(app, req, res);
});

app.patch('/area', function(req, res) {
    app.app.controllers.areaController.atualizar(app, req, res);
});

app.delete('/area/:id', function(req, res) {
    app.app.controllers.areaController.deletar(app, req, res);
});

 // Rotas  Item

 app.get('/itemAtivo', function(req, res) {
    app.app.controllers.itemController.lerItemAtivo(app, req, res);
});

 app.get('/item', function(req, res) {
    app.app.controllers.itemController.lerItem(app, req, res);
});

app.get('/idItem/:id', function(req, res) {
    app.app.controllers.itemController.idItem(app, req, res);
});

app.post('/item', function(req, res) {
    app.app.controllers.itemController.cadastrar(app, req, res);
});

app.patch('/item', function(req, res) {
    app.app.controllers.itemController.atualizar(app, req, res);
});

app.delete('/item/:id', function(req, res) {
    app.app.controllers.itemController.deletar(app, req, res);
});


  // Rotas SubItem 

  app.get('/subitemAtivo', function(req, res) {
    app.app.controllers.subItemController.lerSubitemAtivo(app, req, res);
});

  app.get('/subitem', function(req, res) {
    app.app.controllers.subItemController.lerSubItem(app, req, res);
});

app.get('/idsubitem/:id', function(req, res) {
    app.app.controllers.subItemController.idSubItem(app, req, res);
});

app.post('/subitem', function(req, res) {
    app.app.controllers.subItemController.cadastrar(app, req, res);
});

app.patch('/subitem', function(req, res) {
    app.app.controllers.subItemController.atualizar(app, req, res);
});

app.delete('/subitem/:id', function(req, res) {
    app.app.controllers.subItemController.deletar(app, req, res);
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


 // Rotas Controle Colaborador

app.get('/controlColaborador', function(req, res) {
    app.app.controllers.controlcollaboratorController.lerControleColaborador(app, req, res);
});

app.get('/idcontrolColaborador/:id', function(req, res) {
    app.app.controllers.controlcollaboratorController.idControleColaborador(app, req, res);
});

app.post('/controlColaborador', function(req, res) {
    app.app.controllers.controlcollaboratorController.cadastrar(app, req, res);
});

app.patch('/controlColaborador', function(req, res) {
    app.app.controllers.controlcollaboratorController.atualizar(app, req, res);
});

app.delete('/controlColaborador/:id', function(req, res) {
    app.app.controllers.controlcollaboratorController.deletar(app, req, res);
});

 // Rotas Controle Empresa

 app.get('/controlEmpresa', function(req, res) {
    app.app.controllers.controlCompanysController.lerControleEmpresa(app, req, res);
});

app.get('/idcontrolEmpresa/:id', function(req, res) {
    app.app.controllers.controlCompanysController.idControleEmpresa(app, req, res);
});

app.post('/controlEmpresa', function(req, res) {
    app.app.controllers.controlCompanysController.cadastrar(app, req, res);
});

app.patch('/controlEmpresa', function(req, res) {
    app.app.controllers.controlCompanysController.atualizar(app, req, res);
});

app.delete('/controlEmpresa/:id', function(req, res) {
    app.app.controllers.controlCompanysController.deletar(app, req, res);
});


}