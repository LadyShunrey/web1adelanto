"use strict";

document.querySelector("#btn-compra1").addEventListener("click", agregoUno);
document.querySelector("#btn-compra2").addEventListener("click", agregoDos);
document.querySelector("#btn-compra3").addEventListener("click", agregoTres);

let listado = [];

function agregoUno() {
    let producto = document.querySelector("#producto").value;
    let itemNuevo = {
        producto: producto,
        cantidad: 1,
    };
    listado.push(itemNuevo);
    let listadoDom = document.querySelector("#lista");
    listadoDom.innerHTML = "";

    mostrar();
}

function agregoDos() {
    //agarro el input
    let producto = document.querySelector("#producto").value;
    //lo pongo en el arreglo
    let itemNuevo = {
        producto: producto,
        cantidad: 2,
    };
    listado.push(itemNuevo);

    //lo muestro
    mostrar();
}

function agregoTres() {
    //agarro lo del usuario
    let producto = document.querySelector("#producto").value;
    //lo pongo en el arreglo
    let itemNuevo = {
        producto: producto,
        cantidad: 3,
    };
    listado.push(itemNuevo);
    //imprimo el arreglo
    mostrar();
}

function mostrar() {
    let listadoDom = document.querySelector("#lista");
    listadoDom.innerHTML = " ";
    for (const item of listado) {
        listadoDom.innerHTML += `<div class="item">${item.cantidad}${item.producto}</div>`;
    }
}
