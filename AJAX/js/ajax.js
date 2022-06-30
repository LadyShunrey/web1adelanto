"use strict";

let jsload = document.querySelectorAll(".js-load");
jsload.forEach((e) => e.addEventListener("click", loadClick));

function loadClick(event) {
    event.preventDefault();
    let container = document.querySelector("#use-ajax");
    container.innerHTML = "<h1>Loading.....</h1>";
    fetch("http://web-unicen.herokuapp.com/api/html")
        .then((response) => {
            console.log(response);
            response.text().then((text) => {
                container.innerHTML = text;
            });
        })
        .catch((error) => {
            console.log(error);
            container.innerHTML = "<h1> ERROR - Connection Failed! </h1>";
        });
    let jscomportamiento = document.querySelectorAll(".js-comportamiento");
    // jscomportamiento.forEach((e) => e.addEventListener("click", {} => {alert('Hola')}));
}

let traer = document.querySelector("#traer-html");
traer.addEventListener("click", traerHTML);

let insertar = document.querySelector(".insertar-html");

function traerHTML() {
    fetch("pruebadelink.html").then((response) => {});
}
