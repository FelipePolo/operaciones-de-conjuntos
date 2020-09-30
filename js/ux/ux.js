$(function () {
	$(".dropdown-item").click(function (e) {
		// obtener el id de la operacion que se llamó
		let boton = $("button[name=operar]")[0]
		let operacion = e.target.id
		// asignarle la operacion a el boton para que desencadene un evento click
		boton.setAttribute("id", "operacion" + operacion);

		// colocarle los nombres a los label
		if (operacion.includes("Alfabetos")) {
			setnames("Primer Alfabeto", "Segundo Alfabeto");
		} else if (operacion.includes("Lenguajes")) {
			setnames("Primer Lenguaje", "Segundo Lenguaje");
    }else{
			setnames("Primer Palabra", "Segundo Palabra");
		}
		// mostrar los div de captura de datos y de resultado
		showFR();
  });
});

// FUNCIONES REUTILIZANLES

// muestra el div formulario y el div de resultado
const showFR = () => {
  if ($(".bloque").css("display") === "none") {
    $(".bloque").show()
  }
};

// le pone nombre a los dos label
const setnames = (label1, label2) => {
  $("#label1").html(label1) 
  $("#label2").html(label2)
};
