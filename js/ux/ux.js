$(function () {
	$(".dropdown-item").click(function (e) {
		hideFR();
		// obtener el id de la operacion que se llamó
		let boton = $("button[name=operar]")[0]

		let operacion = e.target.id
		// asignarle la operacion a el boton para que desencadene un evento click
		boton.setAttribute("id", "operacion" + operacion);

		// colocarle los nombres a los label
		if (operacion.includes("Alfabetos")) {
			setnames("Primer Alfabeto", "Segundo Alfabeto");
		} else if (operacion.includes("Lenguajes")) {
			if (operacion.includes("potencia")) {
				setnames("Lenguaje", "Potencia");
			}
			else if (operacion.includes("inverso") || operacion.includes("cardinalidad")) {

				setnames("Lenguaje", "");
			}
			else {
				setnames("Primer Lenguaje", "Segundo Lenguaje");
			}
		} else {
			setnames("Palabra", "");
		}
		showFR();
		// mostrar los div de captura de datos y de resultado
	});
});

// FUNCIONES REUTILIZANLES

// muestra el div formulario y el div de resultado
const showFR = () => {
	$(".bloque").show()
};

const hideFR = () => {

	$(".bloque2").hide()

};

// le pone nombre a los dos label
const setnames = (label1, label2) => {
	$("#label1").html(label1)
	let enter = $("input[id=entrada2]")[0]
	if (label2 != "") {
		if (label2 == "Potencia") {
			enter.setAttribute("type", "number");
		}
		else{
			enter.setAttribute("type", "text");
		}
		$("#label2").html(label2)
		$("#label2").show()
		$("#entrada2").show();
	}
	else {

		$("#label2").hide()
		$("#entrada2").hide();
	}


};
