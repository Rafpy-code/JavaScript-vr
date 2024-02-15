'use strict'

function holaMundo(texto){
	//Variable válida solo dentro de la función.
	var hola_mundo = "Texto dentro de función";

	console.log(texto);
	console.log(numero.toString());
	console.log(hola_mundo);

}

var numero = 12;
var texto = "Hola mundo soy una variable global";
holaMundo(texto);