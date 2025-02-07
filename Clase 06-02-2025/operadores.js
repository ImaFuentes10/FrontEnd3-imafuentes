/*
    Operadores de Javascript

    Tipos:-Matemàticos: PAra realizar cálculos.
*/

// Operadores matemàticos

let suma = 5 + 3
let resta = 6 - 2
let multiplicacion = 4 * 7
let division = 6 / 2 
let modulo = 10 % 3
let exponente = 2 ** 3

console.log(suma, resta, multiplicacion, division, modulo, exponente);

/*
    Jerarquìa de operadores matemàticos
    1. Paréntesis ()
    2. Exponentes **
    3. Multiplicación * y División /
    4. Suma + y Resta -
*/

// Ejemplos de jerarquìa
let operacion1 = 10 + 5 * 2 // 10 + (5 * 2) = 20
let operacion2 = (10 + 5) * 2 // 15 * 2 = 30

console.log(operacion1, operacion2);

// Operadores de comparación
let mayor = 10 > 5 //Mayor que
let menor = 3 < 8 //Menor que
let igual = 5 == "5" //Comapración de VALOR (true). JS verifica si String puede volverse numero primero
let estrictamenteIgual = 5 === "5" //Comparación  estricta de VALOR y TIPO DE DATO (false)
let diferente = 5 != "5" //Diferente (false)
let estrictamenteDiferente = 5 !== "5" //Estrictamente diferente (true)

console.log(mayor, menor, igual, estrictamenteIgual, diferente, estrictamenteDiferente)

//Operadores lógicos
let and = (10 > 5) && (3 < 8) // AND (true)
let or = (10 > 5) || (3 > 8) // OR (true)
let not = !(10 > 5) // NOT (false)

console.log(and, or, not);

/*
    Jerarquía de operadores lógicos
    1. NOT (!)
    2. AND (&&)
    3. OR (||)
*/

// Ejemplo de jerarquía de operadores lógicos
var logico1 = true || false && false //Primero evalúo AND = false, luego OR --> true || false = true
var logico2 = (true || false) && false // (true) && false = false

console.log(logico1, logico2);