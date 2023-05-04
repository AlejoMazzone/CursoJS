/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino*/
function mostrar() {
  let sexo


  sexo = prompt("ingrese sexo f/m").toLowerCase()

while(sexo !="f" && sexo !="m" ){
sexo = prompt ("sexo invalido ingrese f/m")


}

document.getElementById("txtSexo").value = sexo





}
// || es (O) y && es (Y)