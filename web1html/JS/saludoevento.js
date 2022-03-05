function saludarCatedra(){

    let nombre = document.querySelector("#nombre").value;

    console.log("Hola!");
    console.log("Hola Javi!");
    console.log("Hola Mati!");
    console.log("Hola Fran!");
    console.log("Hola " + nombre);

    document.querySelector("#saludo").innerHTML= "Hola " + nombre;
}

saludarCatedra();

