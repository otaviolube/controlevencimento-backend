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