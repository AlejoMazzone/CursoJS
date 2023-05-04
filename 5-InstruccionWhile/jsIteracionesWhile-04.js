/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar() {
  let numero;

  numero = parseInt(prompt("ingrese un numero"));

  while (numero < 0 || numero > 9 || isNaN) {
    numero = parseInt(prompt("ese numero no es,ingrese un numero entre 0 y 9"));
  }

  document.getElementById("txtNumero").value = numero;
}
