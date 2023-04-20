/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar() {
  let numero1;
  let numero2;
  let suma;

    
  numero1 = parseInt(document.getElementById("txtNumeroUno").value);

  numero2 = document.getElementById("txtNumeroDos").value;
  numero2 = parseInt(numero2);
  suma = numero1 + numero2;
  alert("La suma es" + suma);
}
