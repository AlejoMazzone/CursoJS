function mostrar() {
  let edad;
  edad = parseInt(document.getElementById("txtEdad").value);

  if (edad >= 18) {
    alert("sos mayor");
  } else alert("sos menor");
}
