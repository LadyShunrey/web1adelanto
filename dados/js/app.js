"use strict"

//escucho el evento el click del boton

let btn = document.querySelector('#btn-tirar'); 
btn.addEventListener('click', tirar)


function tirar() {
    //genero dos numeros al azar entre 1 y 6
    console.log('el usuario hizo click');
    let valorD1 = Math.floor(Math.random() * 6 + 1);
    let valorD2 = Math.floor(Math.random() * 6 + 1);

    console.log(valorD1, valorD2);

    //cambio la imagen de los dados
    let elDado1 = document.querySelector('#d1');
    let elDado2 = document.querySelector('#d2');

    // img id d1 src imagen dado 1
    elDado1.src = "images/dado" + valorD1 + ".png";
    elDado2.src = "images/dado" + valorD2 + ".png";

    //levantar el input
    let valorEntrada = document.querySelector('#numeroEntrada').value;
    console.log('el numero elegido es' + valorEntrada);

    //verifico que salio el 8
    let resultado = valorD1 + valorD2;
    let mens = document.querySelector('#p-mensaje');
    
    //comparo el valor random con el valor ingresado por el usuario y gana si y solo si es el mismo
    if (resultado == valorEntrada) {
        mens.innerHTML = "GANASTE! Te salió un " + valorEntrada + "!!!";
    
    } else {
        let mens = document.querySelector('#p-mensaje');
        mens.innerHTML= "Más suerte la próxima";
    }
}


let btnReiniciar = document.querySelector('#btn-reiniciar'); 
btnReiniciar.addEventListener('click', reiniciar)

function reiniciar() {
    //traigo los dados
    let elDado1 = document.querySelector('#d1');
    let elDado2 = document.querySelector('#d2');
    
    //los asigno a 1
    elDado1.src = "images/dado1.png";
    elDado2.src = "images/dado1.png";
}


