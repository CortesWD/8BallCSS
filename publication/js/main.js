$(document).on("ready", function () {
	
	var ball    = $(".ball");
	var mensaje = $("#message");
	var shake   = $("#shake");

	//Textos
	var mensajes = [
	{texto: "A través de nuestra herramienta D2C obtenemos la información necesaria para innovar y sorprender a nuestras audiencias"},
	{texto: "Escuchamos al consumidor para conocer tendencias, influenciadores y sobre todo de que hablan las personas"},
	{texto: "Le hacemos seguimiento a las marcas y les brindamos soluciones a la medida de sus necesidades a través de campañas contundentes"},
	{texto: "Nos alimentamos de historias para nutrir nuestra creatividad manteniendo siempre activa la capacidad del asombro "},
	{texto: "Somos la agencia para crear y mantener una relación con propósito entre nuestras marcas y sus clientes"},
	{texto: "Nuestras propuestas creativas son efectivas, siempre enfocadas a cumplir y superar los objetivos planteados por nuestros clientes"},
	{texto: " Nuestros creativos son innovadores, inquietos, sensibles e irreverentes al mismo tiempo, te sorprenderás con sus ideas"},
	{texto: "Contamos con diseñadores que más allá de diseñadores son verdaderos artistas"},
	{texto: "Contamos con ingenieros de alto nivel, unos genios de la programación y el desarrollo de nuevas tecnologías"},
	{texto: " Nuestras campañas han ganado premios EFFIE, FIAP, FEPI, AMAUTA y FICE entre otros"},
	{texto: "Trabajamos bajo el concepto de Data Driven Creativity, un modelo único en el medio"},
	{texto: "Descubrimos “insights” para innovar a través de nuestros mensajes"},
	{texto: "No solo creamos publicidad, creamos entretenimiento multiplataforma de alto nivel que genera recordación"}
	];

	//Funcion para cargar un texto random*/

	function cambiar () {

		//Contenedor
		// textoAnt = document.getElementById("message").innerHTML;
		textoAnt =$(message).html();

		var max = mensajes.length;
		var min = 0;
		var randNum;
		do {
			//Operación Random
			randNum =  Math.floor(Math.random() * (max - min) + min);
			// console.log(mensajes[randNum].texto);
		} while (mensajes[randNum].texto == textoAnt);

		//Print del mensaje

		$(mensaje).html(mensajes[randNum].texto);
		// document.getElementById("message").innerHTML = mensajes[randNum].texto;
	};

	//botón para disparar la acción
	$(shake).on("click", function () {

		function Mostrar () {
			$(mensaje).removeClass("flip");
			$(ball).removeClass("shake");
			
		}

		function  girarText () {
			$(mensaje).removeClass("textoGrande");
			$(mensaje).addClass("flip");
			cambiar();

			$(mensaje).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', Mostrar);
		};

		//Agregamos animación
		$(ball).addClass("shake");

		//Disparamos función cuando se termina la primera animación
		$(ball).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', girarText);

		

	});

	
});