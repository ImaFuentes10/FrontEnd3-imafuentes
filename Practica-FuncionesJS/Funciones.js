//Práctica y ejercicios de funciones en JS

//Calculadora
//Declaramos las funciones a utilizar en la calculadora
function sumar (a, b){
    return a + b;
}

function restar (a, b){
    return a - b;
}

function multiplicar (a, b){
    return a * b;
}

function dividir (a, b){
    return a / b;
}

//Llamadas a funciones
console.log("Suma:", sumar(5, 65));
console.log('Resta:', restar(6, 9));
console.log('Multiplicación:', multiplicar(8, 3));
console.log('División:', dividir(98, 2));


//Conversor de Temperaturas

function celsiusAFahrenheit(celsius){
    return (celsius * (9/5)) + 32;
}

function fahrenheitACelsius(fahrenheit){
    return (fahrenheit -32) * (5/9);
}

console.log("La temperatura en Fahrenehit es:", celsiusAFahrenheit(20));
console.log("La temperatura en Celsius es:", fahrenheitACelsius(68));


//Problema: Seguimiento de Libros

//Declaro array 'librosLeidos'
let librosLeidos = []

//Función para agregar libros al array
function agregarLibro(titulo){
    librosLeidos.push(titulo);
}

//Función para imprimir libros leídos
function mostrarLibrosLeidos(){
    console.log("Has leído estos libros:", librosLeidos);
}

//Fucnción para contar los libros leídos
function contarLibrosLeidos(){
    console.log("Has leído", librosLeidos.length, "libros");
}

//Llamado a función para agregar libros al array
agregarLibro("Fahrenheit 451");
agregarLibro('Harry Potter');
agregarLibro('Los Juegos del Hambre');
agregarLibro('Crónicas Marcianas');
agregarLibro('Juego de Tronos');

//Llamado a funciones para imprimir
mostrarLibrosLeidos();
contarLibrosLeidos();