$(function(){
	$("#entrada").hide();
	$("#unionDeAlfabetos").on("click",function(e){
		console.log("entra");
		$("#core").hide();
		$("#label1").html("Primer Alfabeto {");
		$("#label2").html("Segundo Alfabeto {");
		$("#entrada").show();
		
	});
	
	$("#unionDeLenguajes").on("click",function(e){
		console.log("entra");
		$("#core").hide();
		$("#label1").html("Primer lenguaje {");
		$("#label2").html("Segundo lenguaje {");
		$("#entrada").show();
		
	});
	
	$("#unir").on("click",function(e){
		var elemento1 = $("#entrada1").val().split(",");
		var elemento2 = $("#entrada2").val().split(",");
		union(elemento1, elemento2);
	});
});
function union(elemento1, elemento2){
	var resultado = elemento1;
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
	$("#resultado").val("resutado = {"+resultado+"}");
}