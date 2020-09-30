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

// funcion diferrencia
const difference = (cadena1, cadena2) => {
  // se convierte en un conjunto dividiendo elementos por la ",", al convertir a conjunto evita que se repitan elemntos dentro de el
  let element1 = toSet(cadena1);
  let element2 = toSet(cadena2);

  result = element1.filter(function (i) {
    //filter guarda en result los elementos de la posicion i de element1 que cumplan con la condicion de retorno,
    // retorna si el elemento en la posicion i de element1 no se encuentra en element2
    return !element2.includes(i); //include retorna true si el elemento en la posicion i del element1 se encuentra en element2
  });
  return result;
};
// funcion de ana.
const toSet = (lista) => {
  element1 = lista.split(",");
  cad = Array.from(new Set(element1));
  return cad;
}

// funcion cardinalidad
const cardinalidad = (cadena) => {
  let elemento = toSet(cadena);
  Size = elemento.length;
  return Size;
}

// insertar aqui las demas funciones!

//exportando las funciones
export { union, difference,cardinalidad };
