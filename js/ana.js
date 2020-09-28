$(function(){

   cadena = '{ba,ab, c, d}';
   cadena2= '{ c, d, e, f}';

   dif = difference(cadena, cadena2);
  console.log("la cardinalidad es: ", cardinalidad(cadena));
   
   console.log("la diferencia es: "+dif);


});

function difference(cadena1, cadena2){

   Lista = ToList(cadena1);
   Lista2 = ToList(cadena2);

   console.log(Lista);
   console.log(Lista2);

   vector = Lista.filter(function(i){
      return !(Lista2.includes(i));
   });


   return vector;
}

function ToList(cad1, cad2){
//$("#boton").on("click",function(e){
   /*los elementos se definen como el valor del imput, luego se ignoran los simbolos "{" y "}" con substring 
   desde 1 hasta la longitud de la cadena 1 y por ultimo se convierte en un vector dividiendo por la ",".*/
   var elemento1 = cad1.substring(1,cad1.length-1).split(",");
   var elemento2 = cad2.substring(1,cad2.length-1).split(",");
   difference(elemento1, elemento2);
//});
}

function cardinalidad(cadena){

   Lenguaje = ToList(cadena);
   Size = Lenguaje.length;
   return Size;
}
