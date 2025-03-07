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

//Escucho cuando se hace input en cualquiera de estos dos elementos
numeroLongitudCaracteres.addEventListener('input',sincronizarLongitudCaracteres)
rangoLongitudCaracteres.addEventListener('input', sincronizarLongitudCaracteres)

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

    contraseñaOutput.innerText = contraseña
})

//función para generar la contraseña, toma en cuenta varios elementos ya obtenidos antes
function generarContraseña(longitudCaracteres, incluirMinusculas, incluirMayusculas, incluirNumeros, incluirSimbolos){
    //console.log(MINUS_CHAR_CODES) //Prueba de que se imprime uno de los arreglos

    let codigoCaracteres = []
    const caracteresContraseña = []

    /* //Intento de funciòn fallida, da el array pero con puros valores undefined
    function crearContraseña(){
        for (let i = 0; i < longitudCaracteres; i++){
            const caracterASCII = codigoCaracteres[Math.floor(Math.random() * codigoCaracteres.length)]
            console.log(caracterASCII);
            caracteresContraseña.push(caracterASCII)
        }
        console.log(caracteresContraseña);
    }
    */

    //decisiones para cada posibilidad de selecciòn de elementos
    if(incluirMinusculas && (!incluirMayusculas && !incluirNumeros && !incluirSimbolos)){
        let codigoCaracteres = MINUS_CHAR_CODES
        console.log(codigoCaracteres);
        //crearContraseña(); //llamo a funciòn que sigue fallando

        for (let i = 0; i < longitudCaracteres; i++){
            const caracterASCII = codigoCaracteres[Math.floor(Math.random() * codigoCaracteres.length)]
            console.log(caracterASCII);
            caracteresContraseña.push(String.fromCharCode(caracterASCII))
        }
        console.log(caracteresContraseña);
        return caracteresContraseña.join('')
    }
    if(incluirMayusculas && (!incluirMinusculas && !incluirNumeros && !incluirSimbolos)){
        let codigoCaracteres = MAYUS_CHAR_CODES
        console.log(codigoCaracteres);

        for (let i = 0; i < longitudCaracteres; i++){
            const caracterASCII = codigoCaracteres[Math.floor(Math.random() * codigoCaracteres.length)]
            caracteresContraseña.push(String.fromCharCode(caracterASCII))
        }
        return caracteresContraseña.join('')
    }
    if(incluirNumeros && (!incluirMinusculas && !incluirMayusculas && !incluirSimbolos)){
        let codigoCaracteres = NUM_CHAR_CODES
        console.log(codigoCaracteres);

        for (let i = 0; i < longitudCaracteres; i++){
            const caracterASCII = codigoCaracteres[Math.floor(Math.random() * codigoCaracteres.length)]
            caracteresContraseña.push(String.fromCharCode(caracterASCII))
        }
        return caracteresContraseña.join('')
    }
    if(incluirSimbolos && (!incluirMinusculas && !incluirMayusculas && !incluirNumeros)){
        let codigoCaracteres = SIM_CHAR_CODES
        console.log(codigoCaracteres);

        for (let i = 0; i < longitudCaracteres; i++){
            const caracterASCII = codigoCaracteres[Math.floor(Math.random() * codigoCaracteres.length)]
            caracteresContraseña.push(String.fromCharCode(caracterASCII))
        }
        return caracteresContraseña.join('')
    }
    if(incluirMinusculas && incluirMayusculas && (!incluirNumeros && !incluirSimbolos)){
        let codigoCaracteres = MINUS_CHAR_CODES
        codigoCaracteres = codigoCaracteres.concat(MAYUS_CHAR_CODES)
        console.log(codigoCaracteres);

        for (let i = 0; i < longitudCaracteres; i++){
            const caracterASCII = codigoCaracteres[Math.floor(Math.random() * codigoCaracteres.length)]
            caracteresContraseña.push(String.fromCharCode(caracterASCII))
        }
        return caracteresContraseña.join('')
    }
    if(incluirMinusculas && incluirNumeros && (!incluirMayusculas && !incluirSimbolos)){
        let codigoCaracteres = MINUS_CHAR_CODES
        codigoCaracteres = codigoCaracteres.concat(NUM_CHAR_CODES)
        console.log(codigoCaracteres);

        for (let i = 0; i < longitudCaracteres; i++){
            const caracterASCII = codigoCaracteres[Math.floor(Math.random() * codigoCaracteres.length)]
            caracteresContraseña.push(String.fromCharCode(caracterASCII))
        }
        return caracteresContraseña.join('')
    }
    if(incluirMinusculas && incluirSimbolos && (!incluirMayusculas && !incluirNumeros)){
        let codigoCaracteres = MINUS_CHAR_CODES
        codigoCaracteres = codigoCaracteres.concat(SIM_CHAR_CODES)
        console.log(codigoCaracteres);

        for (let i = 0; i < longitudCaracteres; i++){
            const caracterASCII = codigoCaracteres[Math.floor(Math.random() * codigoCaracteres.length)]
            caracteresContraseña.push(String.fromCharCode(caracterASCII))
        }
        return caracteresContraseña.join('')
    }
    if(incluirMayusculas && incluirNumeros && (!incluirMinusculas && !incluirSimbolos)){
        let codigoCaracteres = MAYUS_CHAR_CODES
        codigoCaracteres = codigoCaracteres.concat(NUM_CHAR_CODES)
        console.log(codigoCaracteres);

        for (let i = 0; i < longitudCaracteres; i++){
            const caracterASCII = codigoCaracteres[Math.floor(Math.random() * codigoCaracteres.length)]
            caracteresContraseña.push(String.fromCharCode(caracterASCII))
        }
        return caracteresContraseña.join('')
    }
    if(incluirMayusculas && incluirSimbolos && (!incluirMinusculas && !incluirNumeros)){
        let codigoCaracteres = MAYUS_CHAR_CODES
        codigoCaracteres = codigoCaracteres.concat(SIM_CHAR_CODES)
        console.log(codigoCaracteres);

        for (let i = 0; i < longitudCaracteres; i++){
            const caracterASCII = codigoCaracteres[Math.floor(Math.random() * codigoCaracteres.length)]
            caracteresContraseña.push(String.fromCharCode(caracterASCII))
        }
        return caracteresContraseña.join('')
    }
    if(incluirNumeros && incluirSimbolos && (!incluirMinusculas && !incluirMayusculas)){
        let codigoCaracteres = NUM_CHAR_CODES
        codigoCaracteres = codigoCaracteres.concat(SIM_CHAR_CODES)
        console.log(codigoCaracteres);

        for (let i = 0; i < longitudCaracteres; i++){
            const caracterASCII = codigoCaracteres[Math.floor(Math.random() * codigoCaracteres.length)]
            caracteresContraseña.push(String.fromCharCode(caracterASCII))
        }
        return caracteresContraseña.join('')
    }
    if(incluirMinusculas && incluirMayusculas && incluirNumeros && !incluirSimbolos){
        let codigoCaracteres = MINUS_CHAR_CODES
        codigoCaracteres = codigoCaracteres.concat(
            MAYUS_CHAR_CODES
        ).concat(
            NUM_CHAR_CODES
        )
        console.log(codigoCaracteres);

        for (let i = 0; i < longitudCaracteres; i++){
            const caracterASCII = codigoCaracteres[Math.floor(Math.random() * codigoCaracteres.length)]
            caracteresContraseña.push(String.fromCharCode(caracterASCII))
        }
        return caracteresContraseña.join('')
    }
    if(incluirMinusculas && incluirMayusculas && incluirSimbolos && !incluirNumeros){
        let codigoCaracteres = MINUS_CHAR_CODES
        codigoCaracteres = codigoCaracteres.concat(
            MAYUS_CHAR_CODES
        ).concat(
            SIM_CHAR_CODES
        )
        console.log(codigoCaracteres);

        for (let i = 0; i < longitudCaracteres; i++){
            const caracterASCII = codigoCaracteres[Math.floor(Math.random() * codigoCaracteres.length)]
            caracteresContraseña.push(String.fromCharCode(caracterASCII))
        }
        return caracteresContraseña.join('')
    }
    if(incluirMinusculas && incluirNumeros && incluirSimbolos && !incluirMayusculas){
        let codigoCaracteres = MINUS_CHAR_CODES
        codigoCaracteres = codigoCaracteres.concat(
            MAYUS_CHAR_CODES
        ).concat(
            SIM_CHAR_CODES
        )
        console.log(codigoCaracteres);

        for (let i = 0; i < longitudCaracteres; i++){
            const caracterASCII = codigoCaracteres[Math.floor(Math.random() * codigoCaracteres.length)]
            caracteresContraseña.push(String.fromCharCode(caracterASCII))
        }
        return caracteresContraseña.join('')
    }
    if(incluirMayusculas && incluirNumeros && incluirSimbolos && !incluirMinusculas){
        let codigoCaracteres = MAYUS_CHAR_CODES
        codigoCaracteres = codigoCaracteres.concat(
            NUM_CHAR_CODES
        ).concat(
            SIM_CHAR_CODES
        )
        console.log(codigoCaracteres);

        for (let i = 0; i < longitudCaracteres; i++){
            const caracterASCII = codigoCaracteres[Math.floor(Math.random() * codigoCaracteres.length)]
            caracteresContraseña.push(String.fromCharCode(caracterASCII))
        }
        return caracteresContraseña.join('')
    }
    if(incluirMinusculas && incluirMayusculas && incluirNumeros && incluirSimbolos){
        let codigoCaracteres = MINUS_CHAR_CODES
        codigoCaracteres = codigoCaracteres.concat(
            MAYUS_CHAR_CODES
        ).concat(
            NUM_CHAR_CODES
        ).concat(
            SIM_CHAR_CODES
        )
        console.log(codigoCaracteres);

        for (let i = 0; i < longitudCaracteres; i++){
            const caracterASCII = codigoCaracteres[Math.floor(Math.random() * codigoCaracteres.length)]
            caracteresContraseña.push(String.fromCharCode(caracterASCII))
        }
        return caracteresContraseña.join('')
    }
}

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

//Funciòn para sincronizar
function sincronizarLongitudCaracteres(e){
    const valor = e.target.value //creo const valor que toma su valor cada que sucede un input en alguno de los dos elementos
    //Doy el mismo valor a cada elemento igual al valor que acaba de tomar en el evento
    numeroLongitudCaracteres.value = valor
    rangoLongitudCaracteres.value = valor
}

