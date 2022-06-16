let contador = 0;

function contarClicks() {
      
    contador = contador + 1;
    //contador++
    
    document.querySelector("#cuenta").innerHTML = contador;

}

let equipo = {
    "nombre": "Barcelona FC",
    "puntos": 98,
    "pj": 35,
    "pg": 32,
    "pe": 2,
    "pp": 1
}
 
console.log(equipo)
console.log(equipo.nombre + " este equipo tiene puntos: " + equipo.puntos)

let tabla = [
    {
        "nombre": "Barcelona FC",
        "puntos": 98,
        "pj": 35,
        "pg": 32,
        "pe": 2,
        "pp": 1
    },
    {
        "nombre": "Atlético de Madrid", 
        "puntos": 74,
        "pj": 35,
        "pg": 22,
        "pe": 8,
        "pp": 5, 
    },
    {
        "nombre": "Real Madrid", 
        "puntos": 7,
        "pj": 35,
        "pg": 22,
        "pe": 8,
        "pp": 5,
    },
    {
        "nombre": "Sevilla", 
        "puntos": 4,
        "pj": 35,
        "pg": 22,
        "pe": 8,
        "pp": 5,
},
    {
        "nombre": "Otro", 
        "puntos": 745,
        "pj": 35,
        "pg": 22,
        "pe": 8,
        "pp": 5,
}
];

console.log(tabla);
console.log(tabla[0].nombre + " " + tabla[0].puntos + " " + tabla[0].pj + " " + tabla[0].pg);
console.log("La cantidad de equipos es: " + tabla.length)

let puntos1 = tabla[0].puntos;
console.log(puntos1);
let puntos2 = tabla[1].puntos;
console.log(puntos2);
let resultado = puntos1 - puntos2;
console.log(resultado);
document.querySelector("#resultado").innerHTML = "la diferencia de puntos entre el 1 y el 2 es de: " + resultado;

document.querySelector("#mostrar-tabla").addEventListener("click", mostrarTabla);
function mostrarTabla(){
    document.querySelector("#tabla-de-posiciones").innerHTML = "";
    for (let i = 0; i<tabla.length; i++){
        document.querySelector("#tabla-de-posiciones").innerHTML += `<div> ${tabla[i].nombre}` + "  " + `${tabla[i].puntos} </div>`;
    }
}

console.log(tabla);
console.log(tabla.length)

document.querySelector("#agregar").addEventListener("click", cargarEquipo);
function cargarEquipo(event){
    event.preventDefault();
    console.log("entré a cargar equipo");
    let form = document.querySelector("#form");
    let formData = new formData(form);
    let nombre = formData.get('nombre');
    let puntos = formData.get('puntos');
    let pj = formData.get('pj');
    let pg = formData.get('pg');
    let pe = formData.get('pe');
    let pp = formData.get('pp');
    let nuevoEquipo = {
        "nombre" : "nombre",
        "puntos" : puntos,
        "pj": pj,
        "pg" : pg,
        "pe" : pe,
        "pp" : pp,
    }
    tabla.push(nuevoEquipo);
    mostrarTabla();
}
console.log(tabla);
console.log(tabla.length)

document.querySelector("#contar-p").addEventListener("click", contarLosP)
function contarLosP(){
    console.log("contar los p a continuacion")
    let todosLosP = document.querySelectorAll("p");
    console.log(todosLosP)
    console.log(todosLosP.length);
}

document.querySelector("#contar-items").addEventListener("click", contarItems);
function contarItems(){
    console.log("funcion contar items de lista");
    let lista = document.querySelector(".lista-menu");
    console.log(lista);
    let hijosLista = lista.children;
    console.log(hijosLista);
    console.log(hijosLista.length);
}

document.querySelector("#contar-divs").addEventListener("click", contarDivs);
function contarDivs(){
    let noticia = document.querySelectorAll(".noticia");
    console.log(noticia.length);
}

//escucho el boton borrar ultimo y mando a la funcion
document.querySelector("#borrar-ultimo").addEventListener("click", borrarUltimo);
// ejecuto funcion borrar desde el ultimo
function borrarUltimo(){
    //llamo todos los p y los meto en un arreglo
    let losPs = document.querySelectorAll("p");
    console.log(losPs);
    console.log(losPs.length);
    // hago arreglo pop
    losPs.pop();
    console.log(losPs.length);
    //ahora lo tengo que mostrar no sé cómo hacer
}

let colorear = document.querySelector("p").addEventListener("click", function(e){
    colorear.classList.add("color");
});
     //agarro ese p
    //le asigno una clase a ese p


