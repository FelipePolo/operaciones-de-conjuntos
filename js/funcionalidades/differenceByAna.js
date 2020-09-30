$(function(){

   cadena = ' i, e, p';
   cadena2 = ' i, e, p, j';

   console.log("la cardinalidad es: ", cardinalidad(cadena));

   resultado = difference(cadena, cadena2);
   
   if(resultado == ''){ // conjunto vacío
      console.log("El conjunto está vacío");
      resultado.push('!'); // Este es el simbolo del vacío 
     }

   console.log("la diferencia es: "+resultado);
});
 
function difference(cadena1, cadena2){
     // se convierte en un conjunto dividiendo elementos por la ",", al convertir a conjunto evita que se repitan elemntos dentro de el 
     var element1 = toSet(cadena1);
     var element2 = toSet(cadena2);

     result = element1.filter(function(i){//filter guarda en result los elementos de la posicion i de element1 que cumplan con la condicion de retorno,
      // retorna si el elemento en la posicion i de element1 no se encuentra en element2  
       return !(element2.includes(i));  //include retorna true si el elemento en la posicion i del element1 se encuentra en element2 
      });
     console.log(result);
     return result;
   }

   // Esta funcion convierte en un conjunto dividiendo los elementos por la ",", al convertir a conjunto evita que se repitan elemntos dentro de el 
   // Y la retorna como array para poder operarlo

function toSet(lista){
   element1 = lista.split(",");
   cad = Array.from(new Set(element1));
   return cad;
}

function cardinalidad(cadena){
   var elemento = toSet(cadena);
   Size = elemento.length;
   return Size;
 }
 