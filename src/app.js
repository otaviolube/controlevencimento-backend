require('dotenv').config({
    path: process.env.NODE_ENV === 'dev' ? '.env.dev' : '.env'
});

const express = require('express');
class AppController {
    constructor(){
        this.express = express();

        this.database();
        this.middlewares();
        this.routes();

        require('./services/MailService').sendTestMail("no-reply@competengenharia.com", "otaviolube@gmail.com", "teste", "teste", "<h1>Teste</h1>");

    }

    database(){
        require('./database/_index');
    }

    middlewares(){
        this.express.use(express.json());
    }

    routes(){
        require('./app/routes/_index')(this.express);
    }
}

module.exports = new AppController().express;