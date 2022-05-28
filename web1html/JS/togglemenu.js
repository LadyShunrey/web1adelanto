"use strict"

document.querySelector(".boton_menu").addEventListener("click", alternarMenu);

function alternarMenu(){
    document.querySelector(".menuDesplegado").classList.toggle("mostrar");
}

