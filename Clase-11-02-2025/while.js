//EJEMPLO 1: Contador simple con while

let contador = 1

while(contador <= 5){
    console.log("El contador está en el ciclo:", contador);
    contador++; // es equivalente a contador = contador + 1 o contador += 1
}

//ejemplo 2: Contador en reversa

let cuentaRegresiva = 10

while (cuentaRegresiva >= 0){
    console.log("Cuenta regresiva", cuentaRegresiva);
    cuentaRegresiva --;
}

//Ejemplo 3: Solicitar confirmación hasta que el usuario acepte

let confirmacion = false

while(!confirmacion){
    //Otras tareas dentro del ciclo
    confirmacion = confirm("Quieres realizar otra operación?"); //'confirm' devuelve true o false
    console.log("Confirmación recibida", confirmacion);
}