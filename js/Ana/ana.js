$(function(){

   cadena = '{ba,ab, c, d}';
   cadena2= '{ c, d, e, f}';
   palabra = 'fredy';

   difference(cadena, cadena2);
   cardinalidad(cadena);
   
   inverse(cadena);
   inverse(palabra);

});

function difference(cadena1, cadena2){

   Lista = ToList(cadena1);
   Lista2 = ToList(cadena2);

   console.log(Lista);
   console.log(Lista2);

   vector = Lista.filter(function(i){
      return !(Lista2.includes(i));
   });

   console.log(vector);

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
   console.log("La cardinalidad es: "+Size);
}
