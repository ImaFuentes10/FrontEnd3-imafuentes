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

const contraseñaOutput = document.getElementById('contraseñaOutput')


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

//al someter form se generarà la contraseña
form.addEventListener('submit', e => {
    e.preventDefault()

    //elementos que determinan las caracterìsticas de la constraseña
    const longitudCaracteres = numeroLongitudCaracteres.value
    const incluirMinusculas = elementoIncluirMinusculas.checked
    const incluirMayusculas = elementoIncluirMayusculas.checked
    const incluirNumeros = elementoIncluirNumeros.checked
    const incluirSimbolos = elementoIncluirSimbolos.checked

    //variable de la constraseña tras ser generada
    const contraseña = generarContraseña(longitudCaracteres, incluirMinusculas, incluirMayusculas, incluirNumeros, incluirSimbolos)
   
    //cambiamos el texto del html por la contraseña generada
    contraseñaOutput.innerText = contraseña
})

//función para generar la contraseña, toma en cuenta varios elementos ya obtenidos antes
function generarContraseña(longitudCaracteres, incluirMinusculas, incluirMayusculas, incluirNumeros, incluirSimbolos){
    //definimos variable para el arreglo de caracteres a crearse dependiendo de los elementos seleccionados
    let codigoCaracteres = []
    //decisiones para cada posibilidad de selecciòn de elementos
    if(incluirMinusculas && (!incluirMayusculas && !incluirNumeros && !incluirSimbolos)){
        codigoCaracteres = MINUS_CHAR_CODES
    }
    if(incluirMayusculas && (!incluirMinusculas && !incluirNumeros && !incluirSimbolos)){
        codigoCaracteres = MAYUS_CHAR_CODES
    }
    if(incluirNumeros && (!incluirMinusculas && !incluirMayusculas && !incluirSimbolos)){
        codigoCaracteres = NUM_CHAR_CODES
    }
    if(incluirSimbolos && (!incluirMinusculas && !incluirMayusculas && !incluirNumeros)){
        codigoCaracteres = SIM_CHAR_CODES
    }
    if(incluirMinusculas && incluirMayusculas && (!incluirNumeros && !incluirSimbolos)){
        codigoCaracteres = MINUS_CHAR_CODES.concat(MAYUS_CHAR_CODES)
    }
    if(incluirMinusculas && incluirNumeros && (!incluirMayusculas && !incluirSimbolos)){
        codigoCaracteres = MINUS_CHAR_CODES.concat(NUM_CHAR_CODES)
    }
    if(incluirMinusculas && incluirSimbolos && (!incluirMayusculas && !incluirNumeros)){
        codigoCaracteres = MINUS_CHAR_CODES.concat(SIM_CHAR_CODES)
    }
    if(incluirMayusculas && incluirNumeros && (!incluirMinusculas && !incluirSimbolos)){
        codigoCaracteres = MAYUS_CHAR_CODES.concat(NUM_CHAR_CODES)
    }
    if(incluirMayusculas && incluirSimbolos && (!incluirMinusculas && !incluirNumeros)){
        codigoCaracteres = MAYUS_CHAR_CODES.concat(SIM_CHAR_CODES)
    }
    if(incluirNumeros && incluirSimbolos && (!incluirMinusculas && !incluirMayusculas)){
        codigoCaracteres = NUM_CHAR_CODES.concat(SIM_CHAR_CODES)
    }
    if(incluirMinusculas && incluirMayusculas && incluirNumeros && !incluirSimbolos){
        codigoCaracteres = MINUS_CHAR_CODES.concat(MAYUS_CHAR_CODES).concat(NUM_CHAR_CODES)
    }
    if(incluirMinusculas && incluirMayusculas && incluirSimbolos && !incluirNumeros){
        codigoCaracteres = MINUS_CHAR_CODES.concat(MAYUS_CHAR_CODES).concat(SIM_CHAR_CODES)
    }
    if(incluirMinusculas && incluirNumeros && incluirSimbolos && !incluirMayusculas){
        codigoCaracteres = MINUS_CHAR_CODES.concat(MAYUS_CHAR_CODES).concat(SIM_CHAR_CODES)
    }
    if(incluirMayusculas && incluirNumeros && incluirSimbolos && !incluirMinusculas){
        codigoCaracteres = MAYUS_CHAR_CODES.concat(NUM_CHAR_CODES).concat(SIM_CHAR_CODES)
    }
    if(incluirMinusculas && incluirMayusculas && incluirNumeros && incluirSimbolos){
        codigoCaracteres = MINUS_CHAR_CODES.concat(MAYUS_CHAR_CODES).concat(NUM_CHAR_CODES).concat(SIM_CHAR_CODES)
    }

    //console.log(codigoCaracteres); //prueba impresión código ASCII de los caracteres que conformaràn la contraseña

    //declaramos una variable que tiene un arreglo que contendrá a los caracteres seleccionados
    const caracteresContraseña = [];

    //Decisiones para asegurarnos de que haya al menos un caracter del tipo seleccionado
    if (incluirMinusculas) {
        const caracterASCII = MINUS_CHAR_CODES[Math.floor(Math.random() * MINUS_CHAR_CODES.length)];
        caracteresContraseña.push(String.fromCharCode(caracterASCII));
    }
    if (incluirMayusculas) {
        const caracterASCII = MAYUS_CHAR_CODES[Math.floor(Math.random() * MAYUS_CHAR_CODES.length)];
        caracteresContraseña.push(String.fromCharCode(caracterASCII));
    }
    if (incluirNumeros) {
        const caracterASCII = NUM_CHAR_CODES[Math.floor(Math.random() * NUM_CHAR_CODES.length)];
        caracteresContraseña.push(String.fromCharCode(caracterASCII));
    }
    if (incluirSimbolos) {
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




