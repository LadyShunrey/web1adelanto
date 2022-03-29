document.getElementById("boton-prender").addEventListener("click", prender);
document.getElementById("boton-apagar").addEventListener("click", apagar);
apagar();

function prender(){
    //cambiar la foto
    document.getElementById("imagen-lampara").src="images/prendida.png";
    //cambiar el fondo
    document.getElementById("fondo").classList.add("prendido");
    document.getElementById("fondo").classList.remove("apagado");
}

function apagar(){
    document.getElementById("imagen-lampara").src="images/apagada.png";
    document.getElementById("fondo").classList.add("apagado");
    document.getElementById("fondo").classList.remove("prendido");
}