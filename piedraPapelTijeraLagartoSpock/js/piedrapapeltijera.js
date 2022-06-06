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

    let value = document.querySelector("#choice");

    if (choice == random){
        empate
    }
    else if ((choice == 0 && ((random == 3 )|| (random == 2))) || (choice == 1 && ((random == 0 )|| (random == 4))) || (choice == 2 && ((random == 3 )|| (random == 1))) || (choice == 3 && ((random == 1 )|| (random == 4))) || (choice == 4 && ((random == 0 )|| (random == 2)))){
        ganaste
    }
    else {
        perdiste
    }

}

let choice = document.querySelector('#choice');
let choiceImg = document.querySelector('#choiceImg');


choice.addEventListener('change', cambiarImagen)

function cambiarImagen(){
    console.log("estoy dentro de la funcion cambiar imagen");
    //laEleccion valor;
    choiceImg.src="images/" + this.value + ".png";
    document.querySelector('.choice-eleccion').innerHTML = this.value;
}