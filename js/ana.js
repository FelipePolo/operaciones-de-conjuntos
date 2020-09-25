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

function ToList(cadena){

   i=0;
   let list = [];
   simbolo = "";

   while(i<cadena.length){
      if(cadena.charAt(i-1)=='{' || cadena.charAt(i-1)==','){
         j = i;
         simbolo = "";
         while(cadena.charAt(j)!=',' && cadena.charAt(j)!='}' && cadena.charAt(j)!='\0'){
            simbolo = simbolo+cadena.charAt(j);        
           j++;
         }

         list.push(simbolo);
      }
      i++;
   }

   return list;

}

function cardinalidad(cadena){

   Lenguaje = ToList(cadena);
   Size = Lenguaje.length;
   return Size;
}
