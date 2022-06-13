"use strict";

let sumar = document.querySelector("#sumar");
sumar.addEventListener("click", sumarUno);

let restar = document.querySelector("#restar");
restar.addEventListener("click", restarUno);

document.querySelector("#agregar");
agregar.addEventListener("click", agregarCantidad);

let pasos = 0;

function sumarUno() {
    console.log("entro a la funcion sumarUno");
    console.log(pasos);
    pasos++;
    console.log(pasos);
    mostrar();
}

function restarUno() {
    console.log("entro a la funcion restarUno");
    console.log(pasos);
    if (pasos > 0) {
        pasos--;
    }

    console.log(pasos);
    mostrar();
}

function agregarCantidad() {
    let nuevosPasos = document.querySelector("#input-pasos").value;
    pasos += parseInt(nuevosPasos);
    mostrar();
}

function mostrar() {
    console.log("entro a la funcion mostrar");
    document.querySelector(".pasos").innerHTML = pasos;
}
