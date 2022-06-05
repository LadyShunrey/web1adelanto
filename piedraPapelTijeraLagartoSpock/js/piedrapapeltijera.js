"use strict"

//event listener al botón "jugar"
let boton = document.querySelector("#boton-play");
boton.addEventListener('click', jugar);

//declaro el arreglo de opciones de la máquina
let opciones = ["piedra", "papel", "tijera", "lagarto", "Spock"];

function jugar (){
    console.log("estoy dentro de la funcion");
    console.log(opciones);
    //genero un numero random entre cero y dos
    let random = Math.floor(Math.random() * 3);
    console.log(random);
    let opcion = opciones[random];
    //escribo la opcion en el html
    document.querySelector('.result').innerHTML = opcion;
}