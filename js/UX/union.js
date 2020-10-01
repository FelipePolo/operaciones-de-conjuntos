$(function(){
	
	$("#entrada1").hide();
	$("#entrada2").hide();
	$("#cResultado").hide();
	
	$(".dropdown-item").on("click",function(e){
		//se muestran los elementos ocultos
		$("#entrada1").show();
		$("#entrada2").show();
		$("#cResultado").show();
	});
	
	$(".alfabeto").on("click",function(e){
		$("#label1").html("Primer Alfabeto");
		$("#label2").html("Segundo Alfabeto");
	});
	
	$(".lenguaje").on("click",function(e){
		$("#label1").html("Primer Lenguaje");
		$("#label2").html("Segundo Lenguaje");
	});
	
	$("#unionDeAlfabetos").on("click",function(e){
		$("#botonIntersectar").hide();
		//el boton se reutiliza
		$("#botonUnir").show();
		$("#botonUnir").html("Unir Alfabetos");
	});
	
	$("#unionDeLenguajes").on("click",function(e){		
		//el boton se reutiliza
		$("#botonUnir").show();
		$("#botonUnir").html("Unir Lenguajes");
	});
	
	$("#interseccionDeAlfabetos").on("click",function(e){
		//el boton se reutiliza
		$("#botonUnir").hide();
		$("#botonIntersectar").show();
		$("#botonIntersectar").html("Calcular interseccion de alfabetos");
	});
	
	$("#interseccionDeLenguajes").on("click",function(e){
		//el boton se reutiliza
		$("#botonUnir").hide();
		$("#botonIntersectar").show();
		$("#botonIntersectar").html("Calcular interseccion de lenguajes");
		
	});
	
	$("#botonUnir").on("click",function(e){
		/*los elementos se definen como el valor del imput, luego se ignoran los simbolos "{" y "}" con substring 
		desde 1 hasta la longitud de la cadena 1 y por ultimo se convierte en un vector dividiendo por la ",".*/
		var elemento1 = $("#entrada1").val().substring(1,($("#entrada1").val().length)-1).split(",");
		var elemento2 = $("#entrada2").val().substring(1,($("#entrada2").val().length)-1).split(",");
		unir(elemento1, elemento2);
	});
	
	$("#botonIntersectar").on("click",function(e){
		/*los elementos se definen como el valor del imput, luego se ignoran los simbolos "{" y "}" con substring 
		desde 1 hasta la longitud de la cadena 1 y por ultimo se convierte en un vector dividiendo por la ",".*/
		var elemento1 = $("#entrada1").val().substring(1,($("#entrada1").val().length)-1).split(",");
		var elemento2 = $("#entrada2").val().substring(1,($("#entrada2").val().length)-1).split(",");
		intersectar(elemento1, elemento2);
	});
});


function unir(elemento1, elemento2){
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
	//la funcion imprimir recibe un vector con los elementos a concatenar y el otro atributo es el tamaño del vector
	imprimir(["{",elemento1,"}"," U ","{",elemento2,"}"," = ","{",resultado,"}"],11);
}

function intersectar(elemento1, elemento2){
	var resultado=[];
	//se compara el primero vector con los elementos del segundo, si se encuentra se coloca 
	for(i = 0;i < elemento1.length; i++){
		var k = false;
		for(j = 0;j < elemento2.length; j++){
			if(elemento2[i] == elemento1[j]){
				k = true;
			}
		}
		if(k == true){
			resultado.push(elemento2[i]);	
		}
	}
	imprimir(["{",elemento1,"}"," ∩ ","{",elemento2,"}"," = ","{",resultado,"}"],11);
}

function imprimir(vector,tam){
	resultado="";
	for(i=0;i<tam;i++){
		resultado= resultado + vector[i];
	}
	$("#resultado").html(resultado);
}