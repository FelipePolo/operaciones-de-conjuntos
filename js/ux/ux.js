$(function () {
	$(".dropdown-item").click(function (e) {
		//La funcion borrar se usa cada vez que se elige una operacion diferente
		borrar();
		// obtener el id de la operacion que se llamó
		let operacion = e.target.id;

		let boton = $("button[name=operar]")[0];
		
		let NameOperacion = document.getElementById(e.target.id).innerHTML;
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
		// mostrar los div de captura de datos y de resultado
		
		showFR();
		ShowTittle(NameOperacion);
	});
    
});

// FUNCIONES REUTILIZANLES

// muestra el div formulario y el div de resultado
const showFR = () => {
	$(".bloque").show()
};

//Esta funcion borra los datos ingresados por el usuario
const borrar = () => {
	$("input[id=entrada1]").val(null);
	$("input[id=entrada2]").val(null);
	document.getElementById("resultado").innerHTML = "";
};

const ShowTittle = (valor) => {

//Subtitulo de cada operacion

  $("#tittle").html("<h4>"+valor+"</h4>");
  console.log(valor);	
}

// le pone nombre a los dos label
const setnames = (label1, label2) => {
	$("#label1").html(label1)
	let enter = $("input[id=entrada1]")[0];

	if (label1 == "Palabra") {
		//Si lo que se requiere ingresar es una palabra el input #1 cambiara de placeholder
		enter.setAttribute("placeholder", "Ingrese una palabra:juan, 1234, etc...");
	}
	else {
		enter.setAttribute("placeholder", "{A,B,C,D,!...}");
	}

	if (label2 != "") {
		enter = $("input[id=entrada2]")[0]
		if (label2 == "Potencia") {
			/*Si se requiere un numero para la potencia  el input #2 cambiara de type y de placeholder*/
			enter.setAttribute("type", "number");
			enter.setAttribute("placeholder", "Ingrese un entero");
		}
		else {
			enter.setAttribute("type", "text");
			enter.setAttribute("placeholder", "{A,B,C,D,!...}");
		}
		$("#label2").html(label2)
		$("#label2").show()
		$("#entrada2").show();
	}
	else {
		//si no se requiere el input #2 se procede a ocultarlo
		$("#label2").hide()
		$("#entrada2").hide();
	}

};