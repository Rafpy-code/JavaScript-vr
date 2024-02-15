'use strict'

const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let ProjectSchema = new Schema({
	name: String,
	description: String,
	category: String,
	year: Number,
	langs: String,
	image: String
});

module.exports = mongoose.model('Project', ProjectSchema);
// projects  --> guarda los documents en la coleccion