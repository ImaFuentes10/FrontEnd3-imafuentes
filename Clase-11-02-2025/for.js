//Ejemplo 1: Contador simple con 'for'

for (let contador = 1; contador <= 5; contador++){
    console.log("(FOR) El contador está en el ciclo:", contador);
}

//Ejemplo 2: Contador en reversa con 'for'

for (let cuentaRegresiva = 10; cuentaRegresiva > 0; cuentaRegresiva--){
    console.log("(FOR) Cuenta regresiva", cuentaRegresiva);
}

//Ejemplo 3: Saltarnos los números pares

for (let impar = 1; impar < 10; impar +=2){ //Subimos de 2 en 2 desade el 1, imprimiendo todos los impares
    console.log("(#1) Número impar: ", impar);
}

for (let impar = 1; impar < 10; impar ++) {
    if (impar % 2 !== 1) {
        continue; //nos deja saltar una iteración
    }
    console.log("(#2) Número impar: ", impar);
}