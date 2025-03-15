//Generador de contraseñas

//Sincronizo barra de longitud con input text de longitud
//Obtengo los inputs de la barra de longitud y el cuadro de texto
const rangoLongitudCaracteres = document.getElementById('rangoLongitudCaracteres')
const numeroLongitudCaracteres = document.getElementById('numeroLongitudCaracteres')

//El formulario genera la contraseña
const form = document.getElementById('generadorContraseñas')

//Obtengo valores de los checkbox en estas constantes
const elementoIncluirMinusculas = document.getElementById('incluirMinusculas')
const elementoIncluirMayusculas = document.getElementById('incluirMayusculas')
const elementoIncluirNumeros = document.getElementById('incluirNumeros')
const elementoIncluirSimbolos = document.getElementById('incluirSimbolos')

//conecto el output en el HTML con el script
const contraseñaOutput = document.getElementById('contraseñaOutput')

//variables que almacenan los arreglos que contienen los códigos ASCII para cada elemento posible
const MINUS_CHAR_CODES = arrayAscendente(97,122)
const MAYUS_CHAR_CODES = arrayAscendente(65,90)
const NUM_CHAR_CODES = arrayAscendente(48,57)
const SIM_CHAR_CODES = arrayAscendente(33,47).concat(
    arrayAscendente(58,64)
).concat(
    arrayAscendente(91,96)
).concat(
    arrayAscendente(123,126)
)

//Función para generar arreglos con un rango de numeración ASCII determinada
function arrayAscendente(low, high) {
    const arregloASCII = []
    for (i=low; i <=high; i++) {
        arregloASCII.push(i)
    }
    return arregloASCII
    //recorre de menor a mayor todo un rango de números previamente delimitados y va añadiendo cada uno al array
    //luego regresa el arreglo con todos estos números, que en este caso cada uno representa una letra en código ASCII
}

//Escucho cuando se hace input en cualquiera de estos dos elementos
numeroLongitudCaracteres.addEventListener('input',sincronizarLongitudCaracteres)
rangoLongitudCaracteres.addEventListener('input', sincronizarLongitudCaracteres)

//Funciòn para sincronizar la longitud
function sincronizarLongitudCaracteres(e){
    const valor = e.target.value //creo const valor que toma su valor cada que sucede un input en alguno de los dos elementos
    //Doy el mismo valor a cada elemento igual al valor que acaba de tomar en el evento
    numeroLongitudCaracteres.value = valor
    rangoLongitudCaracteres.value = valor
}

//variables con los elementos que determinan las caracterìsticas de la constraseña
let longitudCaracteres = numeroLongitudCaracteres.value
let incluirMinusculas = elementoIncluirMinusculas.checked
let incluirMayusculas = elementoIncluirMayusculas.checked
let incluirNumeros = elementoIncluirNumeros.checked
let incluirSimbolos = elementoIncluirSimbolos.checked

//conecto los cuadrados de seguridad
const seguridadCuadrado1 = document.getElementById('seguridad-cuadrado-1')
const seguridadCuadrado2 = document.getElementById('seguridad-cuadrado-2')
const seguridadCuadrado3 = document.getElementById('seguridad-cuadrado-3')
const seguridadCuadrado4 = document.getElementById('seguridad-cuadrado-4')
const colorPrimario = window.getComputedStyle(document.documentElement).getPropertyValue('--color-primario')

//al someter form se generarà la contraseña
form.addEventListener('submit', e => {
    e.preventDefault()
    
    //reiniciamos el valor de las variables de los elementos de la contraseña
    longitudCaracteres = parseInt(numeroLongitudCaracteres.value) //me aseguro de que esta variable sea de tipo number
    incluirMinusculas = elementoIncluirMinusculas.checked
    incluirMayusculas = elementoIncluirMayusculas.checked
    incluirNumeros = elementoIncluirNumeros.checked
    incluirSimbolos = elementoIncluirSimbolos.checked

    //variable de la constraseña tras ser generada
    const contraseña = generarContraseña(longitudCaracteres, incluirMinusculas, incluirMayusculas, incluirNumeros, incluirSimbolos)
    
    //cambiamos el texto del html por la contraseña generada
    contraseñaOutput.innerText = contraseña

    //console.log(typeof(longitudCaracteres));//Prueba para verificar tipo de variable longitudCaracteres

    //llamamos a función para emdir la seguridad de la contraseña
    medirSeguridad();
})

//función para generar la contraseña, toma en cuenta los elementos ya obtenidos antes
function generarContraseña(longitudCaracteres, incluirMinusculas, incluirMayusculas, incluirNumeros, incluirSimbolos){

    //declaramos una variable que tiene un arreglo que contendrá a los caracteres seleccionados
    const caracteresContraseña = [];

    // Declaramos una variable que tiene un arreglo que contiene el código ASCII de los tipos de caraqcteres seleccionados

    let codigoCaracteres = [];

    // Agregamos cada tipo de carácter según corresponda
    if (incluirMinusculas) {
        codigoCaracteres = codigoCaracteres.concat(MINUS_CHAR_CODES);
        //Nos aseguramos de que haya al menos un caracter del tipo seleccionado, se repite en cada decisión
        const caracterASCII = MINUS_CHAR_CODES[Math.floor(Math.random() * MINUS_CHAR_CODES.length)];
        caracteresContraseña.push(String.fromCharCode(caracterASCII));
    }

    if (incluirMayusculas) {
        codigoCaracteres = codigoCaracteres.concat(MAYUS_CHAR_CODES);
        const caracterASCII = MAYUS_CHAR_CODES[Math.floor(Math.random() * MAYUS_CHAR_CODES.length)];
        caracteresContraseña.push(String.fromCharCode(caracterASCII));
    }

    if (incluirNumeros) {
        codigoCaracteres = codigoCaracteres.concat(NUM_CHAR_CODES);
        const caracterASCII = NUM_CHAR_CODES[Math.floor(Math.random() * NUM_CHAR_CODES.length)];
        caracteresContraseña.push(String.fromCharCode(caracterASCII));
    }

    if (incluirSimbolos) {
        codigoCaracteres = codigoCaracteres.concat(SIM_CHAR_CODES);
        const caracterASCII = SIM_CHAR_CODES[Math.floor(Math.random() * SIM_CHAR_CODES.length)];
        caracteresContraseña.push(String.fromCharCode(caracterASCII));
    }  

    //ciclo que nos arroja un lugar aleatorio en el arreglo por cada iteración
    //el cual se repite hasta la longitud deseada, partiendo de la cantidad de caracteres que hayamos añadido antes
    for (let i = caracteresContraseña.length; i < longitudCaracteres; i++){
        const caracterASCII = codigoCaracteres[Math.floor(Math.random() * codigoCaracteres.length)]
        //console.log(caracterASCII); //prueba de impresión de cada caracter seleccionado
        caracteresContraseña.push(String.fromCharCode(caracterASCII)); //añadimos el caracter al arreglo pero ya convertido de ASCII a string
    }

    // Mezclamos los caracteres para que la contraseña sea más aleatoria
    /*
    Algoritmo de Fisher-Yates (o Knuth) para mezclar el arreglo
    En cada iteración se va a seleccionar uno de los elementos del arreglo,
    empezando por el ùltimo y de forma descendente (i = caracteresContraseña.length - 1)
    También se seleccionará un elemento al azar entre el 0 y el elemento que sea i en ese momento (j)
    Finalmente, estos se cambiaràn de posición, mezclando el arreglo
    */
    for (let i = caracteresContraseña.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [caracteresContraseña[i], caracteresContraseña[j]] = [caracteresContraseña[j], caracteresContraseña[i]];
    }

    console.log(caracteresContraseña); //prueba impresión de los caracteres que conforman la contraseña
    return caracteresContraseña.join(''); //recuperamos el arreglo generado y lo juntamos en un string
}

//Botón copiar al portapapeles
//Obtengo evento click del boton de copiar al portapapeles y activo función
document.getElementById('boton-copiar').addEventListener('click',copiarAlPortapapeles)
//utilizo librería navigator para copiar al portapapeles el elemento HTML 'contraseñaOutpu', que es el elemento con el texto de la contraseña generada
function copiarAlPortapapeles(e){
    navigator.clipboard.writeText(contraseñaOutput.innerHTML)
}

//Medidor de seguridad
//Basado en tabla 'Time it takes a hacker to brute force your password 2024'



function medirSeguridad(e){

    let categoria;
    let valorSeguridad = 0;

    //pruebas lógicas para determinar categorìa de la contraseña
    if (incluirNumeros && !incluirMinusculas && !incluirMayusculas &&!incluirSimbolos){
        categoria = 'numOnly';
    }
    if ((incluirMinusculas && !incluirMayusculas && !incluirNumeros && !incluirSimbolos) ||
        (incluirMayusculas && !incluirMinusculas && !incluirNumeros && !incluirSimbolos) ||
        (incluirSimbolos && !incluirMayusculas && !incluirNumeros && !incluirMinusculas)){
            categoria = 'oneElement';
    }
    if ((incluirMinusculas && incluirMayusculas && !incluirNumeros && !incluirSimbolos) ||
        (incluirMinusculas && incluirNumeros && !incluirMayusculas && !incluirSimbolos) ||
        (incluirMinusculas && incluirSimbolos && !incluirNumeros && !incluirMayusculas) ||
        (incluirMayusculas && incluirNumeros && !incluirMinusculas && !incluirSimbolos) ||
        (incluirMayusculas && incluirSimbolos && !incluirMinusculas && !incluirNumeros) ||
        (incluirNumeros && incluirSimbolos && !incluirMinusculas && !incluirMayusculas)){
            categoria = 'twoElements';
    }
    if ((incluirMinusculas && incluirMayusculas && incluirNumeros && !incluirSimbolos) ||
        (incluirMinusculas && incluirMayusculas && incluirSimbolos && !incluirNumeros) ||
        (incluirMinusculas && incluirNumeros && incluirSimbolos && !incluirMayusculas) ||
        (incluirMayusculas && incluirNumeros && incluirSimbolos&& !incluirMinusculas)){
            categoria = 'threeElements';
    }
    if(incluirMinusculas && incluirMayusculas && incluirNumeros && incluirSimbolos){
        categoria = 'fourElements';
    }
    
    //pruebas de comparación con longitudCaracteres para determinar valorSeguridad de la contraseña
    if (categoria === 'numOnly' && longitudCaracteres < 15 ||
        categoria === 'oneElement' && longitudCaracteres < 10 ||
        categoria === 'twoElements' && longitudCaracteres < 9 ||
        categoria === 'threeElements' && longitudCaracteres < 8 ||
        categoria === 'fourElements' && longitudCaracteres < 8){
            valorSeguridad = 0;
    }
    if (categoria === 'numOnly' && longitudCaracteres >= 15 ||
        categoria === 'oneElement' && longitudCaracteres >= 10 && longitudCaracteres < 14 ||
        categoria === 'twoElements' && longitudCaracteres >= 9 && longitudCaracteres < 12 ||
        categoria === 'threeElements' && longitudCaracteres >= 8 && longitudCaracteres < 11 || 
        categoria === 'fourElements' && longitudCaracteres >= 8 && longitudCaracteres < 11){
        valorSeguridad = 1;
    }
    if (categoria === 'oneElement' && longitudCaracteres >= 14 && longitudCaracteres < 17 ||
        categoria === 'twoElements' && longitudCaracteres >= 12 && longitudCaracteres < 14 ||
        categoria === 'threeElements' && longitudCaracteres >= 11 && longitudCaracteres < 14 ||
        categoria === 'fourElements' && longitudCaracteres >=11 && longitudCaracteres < 13){
            valorSeguridad = 2;
    }
    if (categoria === 'oneElement' && longitudCaracteres >= 17 ||
        categoria === 'twoElements' && longitudCaracteres >= 14 || 
        categoria === 'threeElements' && longitudCaracteres >= 14 ||
        categoria === 'fourElements' && longitudCaracteres >=13){
            valorSeguridad = 3;
        }
        
        console.log(categoria);
        console.log(valorSeguridad);

    if(valorSeguridad === 0){
        seguridadCuadrado1.style.backgroundColor = "red";
        seguridadCuadrado2.style.backgroundColor = colorPrimario;
        seguridadCuadrado3.style.backgroundColor = colorPrimario;
        seguridadCuadrado4.style.backgroundColor = colorPrimario;
    }
    
    if(valorSeguridad === 1){
        seguridadCuadrado1.style.backgroundColor = 'orange';
        seguridadCuadrado2.style.backgroundColor = 'orange';
        seguridadCuadrado3.style.backgroundColor = colorPrimario;
        seguridadCuadrado4.style.backgroundColor = colorPrimario;
    }
    if(valorSeguridad === 2){
        seguridadCuadrado1.style.backgroundColor = 'yellow';
        seguridadCuadrado2.style.backgroundColor = 'yellow';
        seguridadCuadrado3.style.backgroundColor = 'yellow';
        seguridadCuadrado4.style.backgroundColor = colorPrimario;
    }
    if(valorSeguridad === 3){
        seguridadCuadrado1.style.backgroundColor = 'green';
        seguridadCuadrado2.style.backgroundColor = 'green';
        seguridadCuadrado3.style.backgroundColor = 'green';
        seguridadCuadrado4.style.backgroundColor = 'green';
    }
}
