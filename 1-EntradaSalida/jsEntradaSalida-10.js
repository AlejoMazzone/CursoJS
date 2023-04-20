/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarDescuento() {
  let importe;
  let aumento;
  let resultado;

  importe = parseInt(document.getElementById("txtImporte").value);
  resultado = parseInt(document.getElementById("txtResultado").value);
  aumento = importe * 0.25;
  resultado = importe - aumento;

  document.getElementById("txtResultado").value = resultado;
}
