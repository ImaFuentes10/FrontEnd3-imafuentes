//Ejemplo 1: Crear un arreglo simple

let frutas = ["Uva", "Manzana", "Pera", "Mango", "Fresa", "Aguacate", "Melón"]
console.log("Lista de frutas: ", frutas)

//Ejemplo 2: Acceder a elementos de un arreglo
console.log("Primera fruta: ", frutas [0]);
console.log("Segunda fruta: ", frutas [1]);
console.log("Ùltima fruta: ", frutas [5]);
console.log("Ùltima fruta usado length: ", frutas [frutas.length -1]); //'frutas.length se refiere a la cantidad de elementos que se encuentran dentro del arreglo

//Ejemplo 3: Modificar un elemento del arreglo
frutas[4] = "Guayaba"
console.log("Frutas actualizadas", frutas);

//Ejemplo push
frutas.push("Plátano")
console.log("frutas.push", frutas)

//Ejemplo unshift
frutas.unshift("Sandía")
console.log("frutas.unshift", frutas)