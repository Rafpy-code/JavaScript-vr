$(document).ready(function () {

	var caja = $("#caja");

	$("#mostrar").hide();

	$("#mostrar").click(function () {
		$(this).hide();
		//fadein
		$("#ocultar").show();

		caja.slideDown('slow');
	});

	$("#ocultar").click(function () {
		$(this).hide();
		//fadeout
		$("#mostrar").show();

		caja.slideUp('slow', function () {
			console.log("Cartel ocultado");
		});

	});

	$("#todoenuno").click(function () {
		//toggel, fadeToggel, slideDown, slideUp
		caja.slideToggle('fast');
	});

	$("#animar").click(function () {
		caja.animate({
			marginLeft: '300px',
			backgroundcolor: 'red',
			color: 'white',
			fontSize: '40px',
			height: '110px'
		}, 'slow')
		.animate({backgroundPositionX:"0px", backgroundPositionY:"0px"})
			.animate({
				borderRadius: '900px',
				marginTop: '80px'
			}, 'slow')
			.animate({
				borderRadius: '0px',
				marginLeft: '0px'
			}, 'slow')
			.animate({
				borderRadius: '100px',
				marginTop: '0px'
			}, 'slow')
			.animate({
				marginLeft: '300px',
				fontSize: '40px',
				height: '210px'
			}, 'slow')
			;
	});

});