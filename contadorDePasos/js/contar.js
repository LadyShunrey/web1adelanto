"use strict";

let pasos = 0;

let sumar = document.querySelector("#sumar");
sumar.addEventListener("click", function (e) {
    console.log(pasos);
    console.log("entro a la funcion sumarUno");
    contarPasos(1);
    console.log(pasos);
});

let restar = document.querySelector("#restar");
restar.addEventListener("click", function (e) {
    console.log(pasos);
    console.log("entro a la funcion restarUno");
    if (pasos > 0) {
        contarPasos(-1);
    }
    console.log(pasos);
});

document.querySelector("#agregar");
agregar.addEventListener("click", agregarCantidad);

function agregarCantidad() {
    let nuevosPasos = document.querySelector("#input-pasos").value;
    let pasosInt = parseInt(nuevosPasos);
    contarPasos(pasosInt);
}

function mostrar() {
    console.log("entro a la funcion mostrar");
    document.querySelector(".pasos").innerHTML = pasos;
}

function contarPasos(paso) {
    console.log("entro a la funcion contarPasos");
    pasos += paso;
    mostrar();
}
