require("dotenv-safe").config();

var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
//multiparty = require('multiparty');
var multiparty = require('connect-multiparty');
var expressValidator = require('express-validator');
const session = require('express-session');
var cors = require('cors');
var jwt = require('jsonwebtoken'); // inserir o módulo jwt

//npm i --save express-validator@4

var app = express();

//expressVue.use(app, expressVueOptions);

app.set('view engine', 'ejs');
app.set('views', './app/views');
app.set('key', 'competactioncompetengenharia'); // criar uma palavra passe de controlo

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(multiparty());
app.use(expressValidator());
app.use(express.static('./app/public'));
app.use(session({
    key: 'user_sid',
    secret: 'competaction',
    resave: false,
    saveUninitialized: false
}));


consign().
include('app/routes').
then('config/dbConnection.js').
then('config/saveImage.js').
then('app/models').
then('app/controllers').
then('app/plus').
into(app);

app.use((req, res, next) => {

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    res.setHeader("Access-Control-Allow-Credentials", true);
    res.setHeader('Access-Control-Expose-Headers', 'x-access-token');

    next();
});


app.get('/', (req, res) => {
    res.redirect('/login');
});

app.get('/admin/:company', (req, res) => {
    app.app.controllers.indexController.index(app, req, res);
});

app.post('/confirmUser', function(req, res) {
    app.app.controllers.userController.confirmUser(app, req, res, jwt);
});

module.exports = app