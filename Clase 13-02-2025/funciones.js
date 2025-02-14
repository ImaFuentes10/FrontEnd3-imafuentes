//FUNCIONES CON JAVASCRIPT

/*
    Una función es un bloque de código REUTILIZABLE que realiza una tarea específica
    Nos permite escribir código más organizado y evitar repetir instrucciones
*/

//Sintaxis básica de una función
//Paso 1. La definición de la función
function saludar() {
    console.log("Hola mundo!");
}

//Paso 2. Llamar a la función, o la estamos ejecutando
saludar()
saludar()
saludar() //Puedo llamarla cuantas veces quiera

//Crear una función con parámateros y argumentos
//Los parámetros son variables que una función recibe al ser llamada
function saludarPersona(nombre){ //'nombre' es un parámatro
    console.log("Hola", nombre,"!");
}

saludarPersona("Juan") //"Juan" es el argumento
saludarPersona("Guadalupe")
saludarPersona("Luis")

//El parámetro es una varible dentro de una función y uno le da un argumento a esta función al llamar la función

//Si no especificamos un return, la fucnión nos devuelve 'undefined'
console.log(saludar());
console.log(saludarPersona());

//Una función puede devolver un valor con 'return'

function suma(num1,num2){
    return num1 + num2
}

console.log(suma(8,3));
console.log("Hola", "mundo!");


function resta(num1,num2) {
    let resta = num1 - num2
    return resta
}

console.log(resta(10,5));
let resultado = resta(4,9); //Guardamos el resultado en una variable
console.log(resultado);

//Podemos anidar funciones para controlar el alcance de una función (nested functions)

function saludoMayuscula(nombre){
    function mayuscula(string) {
        return string.toUpperCase()
    }
    return mayuscula(nombre)
}

console.log(saludoMayuscula("Pepe"));
//console.log(mayuscula("Hola")); //Devuelve error porque mayusculas sólo vive dentro de saludoMayuscula
