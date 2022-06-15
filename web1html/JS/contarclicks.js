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
