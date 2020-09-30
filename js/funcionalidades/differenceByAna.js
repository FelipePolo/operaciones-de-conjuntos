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
   // Esta funcion convierte en un conjunto dividiendo los elementos por la ",", al convertir a conjunto evita que se repitan elemntos dentro de el 
   // Y la retorna como array para poder operarlo

 