var bicicleta = {
	color: 'Rojo',
	modelo: 'BMX',
	frenos: 'De disco',
	velicidadMaxima: '60km',
	cambiaColor: function(nuevo_color){
		// bicicleta.color = nuevo_color
		this.color = nuevo_color;
		document.write(this.color);
		console.log(this);
	}
};

bicicleta.cambiaColor("Azul");