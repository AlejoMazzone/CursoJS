/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{let divisor;
	let dividendo;
	let resto;
  
	  
	divisor = parseInt(document.getElementById("txtDividendo").value);
  
	dividendo = document.getElementById("txtDivisor").value;
	dividendo = parseInt(dividendo);
	resto = divisor % dividendo;
	
	alert("el resto es" + resto);
}
