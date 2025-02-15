/*
  📌 EJERCICIO (OPCIONAL):
  - Predice los resultados de estas expresiones antes de ejecutarlas.
  - Explica en qué orden se ejecutan los operadores en cada caso.
*/

var a = 8, b = 4, c = 2, d = "8";

var resultadoEjercicio1 = a + b * c; // 8 + (4 * 2) = 16
var resultadoEjercicio2 = (a + b) * c; // (8 + 4) * 2 = 12 * 2 = 24
var resultadoEjercicio3 = a / b + c; // (8 / 4) + 2 = 2 + 2 = 4
var resultadoEjercicio4 = a === d || b < c; // 8 === "8" || 4 < 2 -> false || false -> false
var resultadoEjercicio5 = !(a > b) && (c < b); // !(8 > 4) && (2 < 4) -> !(true) && (true) -> false && true -> false
var resultadoEjercicio6 = a % c == 0 && b + c > a; // (8 % 2) == 0 && (4 + 2) > 8 // 0 == 0 && 6 > 8 -> true && false -> false
var resultadoEjercicio7 = (a - c) ** b / c; // (8 - 2) ** 4 / 2 = 6 ** 4 / 2 = 1296 / 2 = 648
var resultadoEjercicio8 = a + b > c && d == a; // (8 + 4) > 2 && "8" == 8 -> 12 > 2 && true -> true && true -> true
var resultadoEjercicio9 = !((a / c) > b) || (b * c <= a); // !((8 / 2) > 4) || (4 * 2 <= 8) -> !(4 > 4) || (8 <= 8) -> !(false) || (true) -> true || true -> true
var resultadoEjercicio10 = (a % c) + (b ** c) - (a / b); // (8 % 2) + (4 ** 2) - (8 / 4) = 0 + 16 - 2 = 14

console.log(
    resultadoEjercicio1, resultadoEjercicio2, resultadoEjercicio3, resultadoEjercicio4, resultadoEjercicio5,
    resultadoEjercicio6, resultadoEjercicio7, resultadoEjercicio8, resultadoEjercicio9, resultadoEjercicio10
);