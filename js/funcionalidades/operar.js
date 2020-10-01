// se importan las funciones del archivo funciones.js
import { union, difference, cardinalidad, concatenacion } from "./funciones.js";
// todo los llamados a las funciones suceden aqui!

$("#boton").click((e) => {
  //variable que controla el switch
  let operacion = e.target.id;

  //valores de los input
  let valinput1;
  let valinput2;
  //
  let resultado = "";

  switch (operacion) {
    case "operacionunionAlfabetos":
      // insertar codigo aqui
      //se obtienen los valores de los imputs
      valinput1 = getvalues("entrada1");
      valinput2 = getvalues("entrada2");
      console.log(valinput1)
      // se llama a la funcion union
      resultado = union(valinput1, valinput2);
      //mandar a imprimir el resultado en el div "resultado"
      logResultado(resultado);
      break;

    case "operacioninterseccionAlfabetos":
      // insertar codigo aqui

      //mandar a imprimir el resultado
      logResultado("imprimir el resultado");
      break;

    case "operaciondiferenciaAlfabetos":
      // insertar codigo aqui
      //se obtienen los valores de los imputs
      valinput1 = getvalues("entrada1");
      valinput2 = getvalues("entrada2");
      // se llama a la funcion diferrencia by ana
      resultado = difference(valinput1, valinput2);
      //mandar a imprimir el resultado
      logResultado(resultado);
      break;

    case "operacionunionLenguajes":
      // insertar codigo aqui

      //mandar a imprimir el resultado
      logResultado("imprimir el resultado");
      break;

    case "operaciondiferenciaLenguajes":
      // insertar codigo aqui

      //mandar a imprimir el resultado
      logResultado("imprimir el resultado");
      break;

    case "operacioninterseccionLenguajes":
      // insertar codigo aqui

      //mandar a imprimir el resultado
      logResultado("imprimir el resultado");
      break;

    case "operacionconcatenacionLenguajes":     
     // insertar codigo aqui
    //se obtienen los valores de los imputs
    valinput1 = getvalues("entrada1");
    valinput2 = getvalues("entrada2");
    // se llama a la funcion concatenacion by ana
    //mandar a imprimir el resultado
     logResultado(concatenacion(valinput1, valinput2));
      break;

    case "operacioninversoLenguajes":
      // insertar codigo aqui

      //mandar a imprimir el resultado
      logResultado("imprimir el resultado");
      break;

    case "operacionpotenciaLenguajes":
      // insertar codigo aqui

      //mandar a imprimir el resultado
      logResultado("imprimir el resultado");
      break;

    case "operacioncardinalidadLenguajes":
      // insertar codigo aqui
      
      //mandar a imprimir el resultado
      logResultado("imprimir el resultado");
      break;

    case "operacioncardinalidadPalabras":
      // insertar codigo aqui

      //mandar a imprimir el resultado
      logResultado("imprimir el resultado");
      break;

    case "operacioninversaPalabras":
      // insertar codigo aqui

      //mandar a imprimir el resultado
      logResultado("imprimir el resultado");
      break;
  }
});

// obtiene los valores del input que le solicites y te regresa un array
const getvalues = (idinput) => {
  let array = $("#" + idinput)
    .val()
    .substring(1, $("#" + idinput).val().length - 1)
    .split(",");
  return Array.from(new Set(array));
};

const logResultado = (cadena) => {
  $("#resultado").html(cadena);
};
