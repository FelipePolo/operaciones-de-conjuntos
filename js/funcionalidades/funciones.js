// funcion union
const union = (elemento1, elemento2) => {
	var resultado = [];
	if(elemento1 == "!"){
		resultado = elemento2;// si el elemento 1 es vacio el elemento 2 sera el resultado
	}else if(elemento2 == "!"){
		resultado = elemento1;// si el elemento 2 es vacio el elemento 1 sera el resultado
	}else{
    resultado.push(elemento1); //a resultado se le asigna el primer vector de elementos
    //se compara el segundo vector con los elementos del primero, si se encuentra ya no se coloca
		for (let i = 0; i < elemento2.length; i++) {
			let k = true;
		  for (let j = 0; j < elemento1.length; j++) {
		    if (elemento2[i] == elemento1[j]) {
		    	k = false;
		    }
		  }
		  if (k == true) {
		    resultado.push(elemento2[i]);
		  }
		}
  }
  return `{ ${elemento1} } U { ${elemento2} } = { ${resultado} }`;
};

const interseccion = (elemento1, elemento2) => {
  var resultado = [];
  if(elemento1 == "!" || elemento2 == "!"){
		resultado = "!";// si alguno de los dos es ! el resultado de la interseccion sera !
	}else{
    //se compara el primer vector con el segundo, si se encuentra, se coloca en el vector resultado
    for (let i = 0; i < elemento2.length; i++) {
      let k = false;
      for (let j = 0; j < elemento1.length; j++) {
        if (elemento2[i] == elemento1[j]) {
          k = true;
        }
      }
      if (k == true) {
        resultado.push(elemento2[i]);
      }
    }
  }
  if(resultado==""){
    resultado = "!";//si no existe interseccion el conjunto quedaria vacio
  }
  return `{ ${elemento1} } ∩ { ${elemento2} } = { ${resultado} }`;
};

const difference = (cadena1, cadena2) => {
  let element1 = cadena1;
  let element2 = cadena2;
  
  //filter guarda en result los elementos de la posicion i de element1 que cumplan con la condicion de retorno,
  // retorna si el elemento en la posicion i de element1 no se encuentra en element2
  
  let result = element1.filter(function (i) {
    return !element2.includes(i); //include retorna true si el elemento en la posicion i del element1 se encuentra en element2
  });
  if (result == "") {
    // conjunto vacío
    result.push("!"); // Este es el simbolo del vacío
  }
  return  `{ ${cadena1} } - { ${cadena2} } = { ${result} }`;
};



const potency = (cadena, num) => {
  let result = [];
  result = cadena;
  for (let i = 0; i < num - 1; i++) {
    result = concatenation(result, cadena);
  }
  return `{ ${result} }`;
}


const concatenation = (cadena1, cadena2) => {
  var result = [];
  if(cadena1 == "!"){
		result = cadena2;// si el elemento 1 es vacio el elemento 2 sera el resultado
	}else if(cadena2 == "!"){
		result = cadena1;// si el elemento 2 es vacio el elemento 1 sera el resultado
	}else{
    for (let i = 0; i < cadena1.length; i++) {
      for (let j = 0; j < cadena2.length; j++) {
        if (!result.includes(cadena1[i] + cadena2[j])) {
          result.push(cadena1[i] + cadena2[j]);
        }
      }
    }
  }

  return result;
}

const inverse = (cadena) => {
  let result = [];
  for (let i = 0; i < cadena.length; i++) {
    let aux = cadena[i].split("").reverse();
    result.push(aux.join(""));
  }
  return `{ ${result} }`;
}

const cardinality = (palabra) => {
  let array = $("#" + palabra)
    .val()
    .split("");
  return array.length;
}

//exportando las funciones
export { union, difference, concatenation, inverse, potency, cardinality, interseccion };

