function mostrar() {
  let numero = 0;
  let suma;
  let total = 0;
  let i = 0;

  while (i < 5) {
    total += parseInt(prompt("ingrese el primer numero"));
    i++;
    
  }
     document.getElementById("txtSuma").value = total;
  document.getElementById("txtPromedio").value = total/5;
}


// i = i + 1; = i ++;

//   document.getElementById("txtPromedio").value = promedio;
//} El 5 de (i) es como u na traba para repetir las veces que queramos el while EJ:
//(cambias 5 por 100 y se va a repetir 100 veces)
