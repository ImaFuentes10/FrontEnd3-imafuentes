/*
    Estructura de control IF en Javascript
    - Permite ejecutar código sólo si cumple una condición.
    - Puede usarse con operadores de compración y lógicos.
*/

let edad = 18
let tieneINE = false

//Condicional simple
if(edad >= 18 && tieneINE){
    console.log("Tienes los requisitos para votar 👍")
}

//Conditional con else
if(edad >= 18 && tieneINE){
    console.log("Tienes los requisitos para votar 👍")
}else{
    console.log("Uno o más requisitos no se cumplen, verifica tu información")
}

//Condicional con 'else if'
if(edad < 13){
    console.log("Eres niñx")
}else if(edad < 18){
    console.log("Eres adolescente")
}else{
    console.log("Eres adultx")
}

let tieneEntrada = false
if(!tieneEntrada){
    console.log("Debes comprar una entrada")
}

console.log("Fin de la ejecución");