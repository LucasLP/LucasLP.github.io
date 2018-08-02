function round(amount, decimals) {
	return Number.parseFloat(amount).toFixed(decimals);
  }

  function TSPTtimeConsumption(){
	var cities = document.getElementById('cities').value;
	var currency = document.getElementById('currency').value;
	var kiloWattHour = document.getElementById('kwHour').value; //in your currency;
	//CPU informations
	var ghz = document.getElementById('cpuGHZ').value;
	var cores = document.getElementById('cpuCores').value;
	var TDP = document.getElementById('cpuTDP').value;//watts
	//Number of CPU able to compute
	var parallelCPUs = document.getElementById('parallelCPUs').value;


	//=====================================================
	var possibilities = 1;
	var result="<table class=\"ui celled table\">"+
				"<thead><tr>"+
				"<th>N. Cities</th>"+
				"<th>N. Possibilities</th>"+
				"<th>Time</th>"+
				"<th>Cost</th>"+
				"</tr></thead><tbody>";
	for(var i = 1 ; i <= cities ; i++){

		var instructionNumber = i;  //number of instruction will need to generate one rote
		var rotesPerSecond = (ghz * 1000000 * cores * parallelCPUs) / instructionNumber;

		possibilities = possibilities * i; // = factorial(i)
		
		var seconds = possibilities/rotesPerSecond;
		var minutes = seconds/60 ;
		var hours = minutes/60;
		var days = hours/24;
		var years = days/365;
		var myears = years/1000000;
		
		result = result+ "<td>"+i+"</td>"
		result = result+ "<td>"+possibilities+"</td>"
		if(myears > 1){
			result = result + "<td>"+round(myears,3)+" million of years</td>";
		}else if(years > 1) {
			result = result + "<td>"+round(years)+" years and "+ round((years % 1)*365) +" days</td>";
		} else if(days > 1) { 
			result = result + "<td>"+round(days)+" days and "+ round((days % 1)*24) +" hours</td>";
		} else if(hours > 1) {
			result = result + "<td>"+round(hours)+" hours and "+round((hours % 1)*60)+" minutes</td>";
		} else if(minutes > 1) {
			result = result + "<td>"+round(minutes)+" minutes and "+round((minutes % 1)*60)+" seconds</td>";
		} else if(seconds>0.0005){
			result = result + "<td>"+round(seconds,3)+" seconds</td>";
		}else {
			result = result + "<td>"+round(seconds,6)+" seconds</td>";
		}
			
		cost = round(hours*TDP*kiloWattHour,2)
		if(cost>1000000){
			cost=cost/1000000
			cost = round(cost)
			result = result+"<td>"+currency+" "+cost+" Millions</td>";
		}else{
			cost = round(cost,2)
			result = result+"<td>"+currency+" "+cost+"</td>";
		}
		result = result + '</tr>';
	}
	result = result + "  </tbody>  </tbody>";
	document.getElementById('result').innerHTML  = result
  }