let frutas = ["Manzana"] //Creamos el arreglo
let otrasFrutas = ["Uva", "Aguacate"]

//Métodos comunes en arerglos

//.push(<nuevoElemento>) -> Agrega un elemento al FINAL //Necesita un argumento
frutas.push("Pera")
frutas.push("Guayaba")
frutas.push(otrasFrutas) // ->length = 4 porque agrega todo el arreglo completo en la última posición
console.log("Después de push", frutas);

//.pop() -> Elimina el ÚLTIMO elemento del arreglo
console.log(frutas.pop()); //Obtengo el último elemento y lo saco de la estructura
console.log("Después de pop", frutas); //Imprimo el arreglo ya sin el último elemento

//.unshift(<nuevoElemento>) -> Agrega un elemento al INICIO del arreglo //Necesita un argumento
frutas.unshift("Melón")
console.log("Después de unshift", frutas);

//.shift() -> Elimina el PRIMER elemento del arreglo
console.log(frutas.shift());
console.log("después de shift", frutas);

// .map() -> CREA un nuevo arreglo transformando cada elemento de mi arreglo
/*
    .map() recorre cada elemento del arreglo original y devuelve un nuevo arreglo con los elementos transformados.
    El arreglo original no se modifica    
*/

//Ejemplo 1: Multiplicamos cada elemento (item) del arreglo x2

let numeros = [1,2,3]
console.log("Números", numeros);

let numerosX2 = numeros.map((numeros) => numeros * 2) // numeros.map(n => n * 2) igual sirve
console.log("Números X2", numerosX2);

//Ejemplo 2: Convertir cada fruta en mayúsculas
let frutasEnMayusculas = frutas.map((frutas) => frutas.toUpperCase()) //toUpperCase convierte carcteres en mayúsculas
console.log("Frutas en mayúsculas", frutasEnMayusculas);


//Ejemplo 3: Convertir cada fruta en minúsculas
let frutasEnMinuscula = frutasEnMayusculas.map ((frutasEnMayusculas) => frutasEnMayusculas.toLowerCase())
console.log("Frutas en minúsculas", frutasEnMinuscula);

let frutasEnMinuscula2 = frutas.map((frutas) => frutas.toLowerCase())
console.log("Frutas en minúsuclas 2", frutasEnMinuscula2);

//.sort() -> Ordena los elementos del arreglo en orden alfabético
/* 
    .sort() cambia el orden de los elementos del arreglo original de manera alfabética
    o numérica si se proporcional una FUNCIÓN de comparación
    Este método MODIFICA el arreglo original
*/

let verduras = ["Espinaca", "Zanahoria", "Calabaza"]

console.log(verduras);
console.log(verduras.sort());

//.sort() con números -> IMPORTANTE: si usamos sort directamente con números, los ordenará como texto
let numerosOrdenados = [11,2,9,98,21,6,55]

console.log(numerosOrdenados);
console.log("Números ordenados incorrectamente", numerosOrdenados.sort());

//Para ordenar correctamente números debemos proporcionar una FUNCIÓN de comparación
console.log("Números ordenados correctamente", numerosOrdenados.sort((num1, num2) => num1-num2));

/*
    La función de comparación toma dos números (num1 y num2)
    -Si num1 es MENOR que num2, la resta da un número NEGATIVO, entonces num1 va ANTEs que num2
    -Si num1 en MAYOR que num2, la resta da un número POSITIVO, entonces num1 va DESPUÉS de num2
    -Si num1 y num2 son iguales, la resta da 0 y su orden no cambia
    Nota - Estas opciones se van a repetir en cada iteración hasta que los números estén ordenados
*/

console.log("Números ordenados a la inversa", numerosOrdenados.sort((num1,num2) => num2-num1));

console.log(verduras.reverse());