'use strict'

let express = require('express');
let bodyParser = require('body-parser');

let app = express();

// cargar archivos rutas
let project_routes = require('./routes/project');

// middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// ruta inicial para todas las rutas.
app.use('/api', project_routes);

// exportar
module.exports = app;

/*
// Prueba de rutas
app.get('/', (req, res) => {
    res.status(200).send(
        '<h1> Ruta Inicial / app.get</h1>'
    );
});
app.get('/test', (req, res) => {
    res.status(200).send({
        message: '/test app.get Ruta funcionando'
    });
});
app.post('/post', (req, res) => {
    res.status(200).send({
        message: '/post app.post Enviando parámetros'
    });
    //console.log(req/query/loqueseenvienpor la url/?);
    console.log(req.body);
    console.log(req.body.nombre);
});
app.post('/post/:id', (req, res) => {
    res.status(200).send({
        message: '/post app.post Enviando parámetros'
    });
    console.log(req.params.id);
});
*/