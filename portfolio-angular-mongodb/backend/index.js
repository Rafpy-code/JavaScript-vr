'use strict'

const mongoose = require('mongoose');
let app = require('./app');
const port = 3700;

mongoose.Promise = global.Promise;
// Cambiar localhost por 0.0.0.0 para que se realice la conexión correcta.
mongoose.connect('mongodb://0.0.0.0:27017/portfolio')
        .then(() => {
        	console.log("Conexión a la BD establecida satisfactoriamente...");

        	// Creacion del servidor
        	app.listen(port, () => {
        		console.log("Servidor corriendo correctamente en la url: localhost:3700");
        	});

        })
        .catch(err => console.error(err));
	