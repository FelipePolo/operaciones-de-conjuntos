$(function(){
	
	$("#entrada1").hide();
	$("#entrada2").hide();
	$("#cResultado").hide();
	
	$("#unionDeAlfabetos").on("click",function(e){
		//se reutilizan los label solo se cambia el valor
		$("#label1").html("Primer Alfabeto");
		$("#label2").html("Segundo Alfabeto");
		//el boton se reutiliza
		$("#boton").html("Unir Alfabetos");
		//se muestran los elementos ocultos
		$("#entrada1").show();
		$("#entrada2").show();
		$("#cResultado").show();
		$("#boton").show();
		
	});
	
	$("#unionDeLenguajes").on("click",function(e){
		//se reutilizan los label solo se cambia el valor
		$("#label1").html("Primer Lenguaje");
		$("#label2").html("Segundo Lenguaje");
		//el boton se reutiliza
		$("#boton").html("Unir Lenguajes");
		//se muestran los elementos ocultos
		$("#entrada1").show();
		$("#entrada2").show();
		$("#cResultado").show();
		$("#boton").show();
		
	});
	
	$("#boton").on("click",function(e){
		/*los elementos se definen como el valor del imput, luego se ignoran los simbolos "{" y "}" con substring 
		desde 1 hasta la longitud de la cadena 1 y por ultimo se convierte en un vector dividiendo por la ",".*/
		var elemento1 = $("#entrada1").val().substring(1,($("#entrada1").val().length)-1).split(",");
		var elemento2 = $("#entrada2").val().substring(1,($("#entrada2").val().length)-1).split(",");
		union(elemento1, elemento2);
	});
});
function union(elemento1, elemento2){
	var resultado=[];
	resultado.push(elemento1);//a resultado se le asigna el primer vector de elementos
	//se compara el segundo vector con los elementos del primero, si se encuentra ya no se coloca 
	for(i = 0;i < elemento2.length; i++){
		var k = true;
		for(j = 0;j < elemento1.length; j++){
			if(elemento2[i] == elemento1[j]){
				k = false;
			}
		}
		if(k == true){
			resultado.push(elemento2[i]);
			
		}
	}
	$("#resultado").html("{"+elemento1+"} U"+" {"+elemento2+"} = {"+resultado+"}");//se imprime el resultado en a card
}