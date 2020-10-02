// funcion union
const union = (elemento1, elemento2) => {
  var resultado = [];
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
  return `{ ${elemento1} } U { ${elemento2} } = { ${resultado} }`;
};


const difference = (cadena1, cadena2) => {
  // se convierte en un conjunto dividiendo elementos por la ",", al convertir a conjunto evita que se repitan elemntos dentro de el
  let element1 = cadena1;
  let element2 = cadena2;

  let result = element1.filter(function (i) {
    //filter guarda en result los elementos de la posicion i de element1 que cumplan con la condicion de retorno,
    // retorna si el elemento en la posicion i de element1 no se encuentra en element2
    return !element2.includes(i); //include retorna true si el elemento en la posicion i del element1 se encuentra en element2
  });
  if (result == "") {
    // conjunto vacío
    result.push("!"); // Este es el simbolo del vacío
  }
  return result;
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
  for (let i = 0; i < cadena1.length; i++) {
    for (let j = 0; j < cadena2.length; j++) {
      if (cadena1[i] == "!") {
        if (!result.includes(cadena2[j])) {
          result.push(cadena2[j]);
        }
      }
      else if (cadena2[j] == "!") {
        if (!result.includes(cadena1[j])) {
          result.push(cadena2[j]);
        }
      }
      else {
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
    let cadenaAux = cadena[i].split("");
    let aux = "";
    for (let j = (cadenaAux.length) - 1; j >= 0; j--) {
      aux += cadenaAux[j];
    }
    result.push(aux);
  }
  return `{ ${result} }`;
}


//exportando las funciones
export { union, difference, concatenation, inverse, potency };
