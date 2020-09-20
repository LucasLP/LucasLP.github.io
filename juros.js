function round(amount, decimals) {
	return Number.parseFloat(amount).toFixed(decimals);
  }
  
function execJuros(){

	var juros	  = parseFloat(document.getElementById('jurosField').value); 	//#juros de poupança do banco
	var valor	  = parseFloat(document.getElementById('valorMensal').value); 	//#valor a ser guardado ao mês
	var acumulado = parseFloat(document.getElementById('valorInicial').value); //#valor inicial guardado
	var N		  = parseFloat(document.getElementById('meses').value);	//#número de meses
	var valorBase = parseFloat(acumulado)

	var result="<table class=\"ui celled table\">"+
				"<thead><tr>"+
				"<th>Month</th>"+
				"<th>Interest</th>"+
				"<th>Final Value</th>"+
				"<th>Amount saved</th>"+
				"</tr></thead><tbody>";
	for(var i=1;i<N;i++){
		result = result + "<td>"+i+"</td>";

		//#juros em cima do acumulado
		var jurosDoAcumulado = acumulado*(1+juros)	
		//#acréscimo do valor a ser guardado mensalmente
		acumulado = jurosDoAcumulado + valor;
		valorBase = valorBase + valor;
		
		result = result + "<td>"+round(jurosDoAcumulado,2)+"</td>";
		result = result + "<td>"+round(acumulado,2)+"</td>";
		result = result + "<td>"+round(valorBase,2)+"</td>";
		result = result + '</tr>';
	}
	
	result = result + "  </tbody>  </tbody>";
	document.getElementById('result').innerHTML  = result
}