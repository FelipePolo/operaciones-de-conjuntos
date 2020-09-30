$(function () {
  $("#unionDeAlfabetos").on("click", function (e) {
    //se reutilizan los label solo se cambia el valor
    setnameslabel("Primer Alfabeto", "Segundo Alfabeto");
    //el boton se reutiliza
    $("#boton").html("Unir Alfabetos");
    //se muestran los elementos ocultos
    showFR();
  });

  $("#unionDeLenguajes").on("click", function (e) {
    //se reutilizan los label solo se cambia el valor
    setnameslabel("Primer Lenguaje", "Segundo Lenguaje");
    //el boton se reutiliza
    $("#boton").html("Unir Lenguajes");
    //se muestran los elementos ocultos
    showFR();
  });

  $("#boton").on("click", function (e) {
    /*los elementos se definen como el valor del imput, luego se ignoran los simbolos "{" y "}" con substring 
		desde 1 hasta la longitud de la cadena 1 y por ultimo se convierte en un vector dividiendo por la ",".*/
    var elemento1 = getvalues("entrada1");
    var elemento2 = getvalues("entrada2");

    union(elemento1, elemento2);
	});
	
});

function union(elemento1, elemento2) {
  var resultado = [];
  resultado.push(elemento1); //a resultado se le asigna el primer vector de elementos
  //se compara el segundo vector con los elementos del primero, si se encuentra ya no se coloca
  for (i = 0; i < elemento2.length; i++) {
    var k = true;
    for (j = 0; j < elemento1.length; j++) {
      if (elemento2[i] == elemento1[j]) {
        k = false;
      }
    }
    if (k == true) {
      resultado.push(elemento2[i]);
    }
	}
	logResultado("{${elemento1}} U {${elemento2}} = {${resultado}")
  // $("#resultado").html(
  //   "{" + elemento1 + "} U" + " {" + elemento2 + "} = {" + resultado + "}"
  // ); //se imprime el resultado en a card
}

// FUNCIONES REUTILIZANLES

// muestra el div formulario y el div de resultado
const showFR = () => {
  if ($(".bloque").css("display") !== "none") {
    $(".bloque").hide()
  } else {
    $(".bloque").show()
  }
};

// le pone nombre a los dos label
const setnameslabel = (label1, label2) => {
  $("#label1").html = label1
  $("#label2").html = label2
};

// obtiene los valores del input que le solicites y te regresa un array
const getvalues = (idinput) => {
  let array = $("#" + idinput)
    .val()
    .substring(1, $("#" + idinput).val().length - 1)
    .split(",")
  return array
}

const logResultado = (cadena) => {
  $("#resultado").html(cadena)
};
