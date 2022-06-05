"use strict"

//event listener al botón "jugar"
let boton = document.querySelector("#boton-play");
boton.addEventListener('click', jugar);




//declaro el arreglo de opciones de la máquina
let opciones = ["piedra", "papel", "tijera", "lagarto", "Spock"];

function jugar (){
    console.log("estoy dentro de la funcion jugar");
    console.log("el tamano es " + opciones.length);
    console.log("las opciones son " + opciones);

    //genero un numero random entre 0 y 4
    let random = Math.floor(Math.random() * opciones.length);
    console.log(random);
    let opcion = opciones[random];

    //escribo la opcion en el html
    document.querySelector('.result').innerHTML = opcion;

    //cambio la imagen
    let result = document.querySelector('#result');

    result.src = "images/" + random + ".png";
}


let botonElegir = document.querySelector("#boton-elegir");
botonElegir.addEventListener('click', cambiarImagen)

function cambiarImagen{
    console.log("estoy dentro de la funcion cambiar imagen");
    let choice = document.querySelector('#choice');
    console.log(choice);
    //laEleccion valor;
    choice.src="images/" + laEleccion + ".png";
}