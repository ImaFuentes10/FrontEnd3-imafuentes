/* 
    Diferencias entre var-let y const en JavaScript
    -var: Se puede reasignar y redeclarar en cualquier parte del còdigo.
*/

// VAR
var nombre = "Jonathan" //Declaramos una variable con var
nombre = "Gilean" // Reasignamos el valor del nombre
var nombre = "Luis" // Redeclaro la variable sin problema
console.log(nombre);

// LET
let apellido = "Villanueva" // Declarando una variable con 'let'
apellido = "Corona" // Reasignamos el valor de 'apellido'
//let apellido = "Parra" // Esto darìa error porque no se puede redeclarar en el mismo ámbito

// CONST
const gravedad = "9.81m/s2" // Declaramos una constante con 'const'
//gravedad = "10.1m/s2" // Esto darìa error porqeu n se pueden reasignar constantes
//const gravedad = "1.0m/s2" // Esto darìa error porque no se puede redeclarar una constante en el mismo ámbito
