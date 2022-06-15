"use strict";

let agregar = document.querySelector("#agregar");
agregar.addEventListener("click", agregarUno);

let vaciar = document.querySelector("#vaciar");
vaciar.addEventListener("click", vaciarTodos);

let borrar = document.querySelector("#borrar");
borrar.addEventListener("click", borrarUltimo);

let sorteo = document.querySelector("#sorteo");
sorteo.addEventListener("click", sortear);

let participantes = [];

function agregarUno() {
    console.log("funcion agregar uno");
    //levanto el input en una variable
    let input = document.querySelector("#nombre");
    let nombre = input.value;
    console.log("el nombre ingresado es " + nombre);

    //agrego un elemento (variable) al arreglo con push
    participantes.push(nombre);
    console.log("el arreglo tiene estos nombres: ", participantes);
    console.log(participantes);

    //muestro el arreglo
    mostrar();

    //vacio el input
    document.querySelector("#nombre").value = "";
    nombre = "";
}

let listaSorteo = document.querySelector(".lista-sorteo");

function mostrar() {
    console.log("funcion mostrar");

    listaSorteo.innerHTML = "";

    for (let participante of participantes) {
        listaSorteo.innerHTML += `<li>${participante}</li>`;
    }
}

function vaciarTodos() {
    console.log("click vaciar");
    participantes = [];
    console.log(participantes);
    mostrar();
}

function borrarUltimo() {
    //borra solo el ultimo cargado
    console.log("click borrar");
    console.log(participantes);
    participantes.pop();
    console.log(participantes);
    mostrar();
}

function sortear() {
    //elige uno de la lista
    console.log("click sortear");

    let ganador = Math.floor(Math.random() * participantes.length);
    document.querySelector("#ganador").innerHTML = participantes[ganador];
}
