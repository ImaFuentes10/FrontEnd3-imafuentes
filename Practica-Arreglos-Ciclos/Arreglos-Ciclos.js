//Práctica Arreglos y Ciclos

//Ejercicios prácticos ciclo 'while'

//Contador 10 a 1
let contador = 10

while(contador >= 0){
    console.log("while contador inverso:", contador);
    contador --;
}

//Contador 10 a 1 imprimiendo solo pares
let contador2 = 10

while(contador2 >= 0){
    console.log("while contador inverso pares:", contador2);
    contador2 -= 2;
}



//Ejercicios prácticos ciclo 'for'

//Contador inverso 10 a 1

for (let forContador = 10; forContador >= 0; forContador--){
    console.log("for contador inverso:", forContador);
}

//Suma de números pares entre 1 y 20
let sumaPares = 0

for (let contadorPares = 1; contadorPares <= 20; contadorPares++){
    if (contadorPares % 2 === 0){
        sumaPares = sumaPares + contadorPares;
    }
}

console.log("La suma de los números pares entre 1 y 20 es:", sumaPares);



//Ejercicio práctico Arrays

//Creo arreglo
let colores = ['rojo', 'verde', 'azul', 'amarillo']
console.log("Colores:", colores);

//Imprimo 2do color
console.log("2do color:", colores[1]);

//Cambio 3er color
colores[2] = 'rosa'
console.log ("Cambio colores:", colores);

//Añado color al final
colores.push('morado')
console.log("Añado color:", colores);

//Elimino primer color
colores.shift()
console.log("Elimino color:", colores);



//Problema: Clasificación de frutas

let frutas = ['manzana', 'sandía', 'melón', 'manzana', 'plátano', 'plátano', 'papaya', 'sandía', 'papaya', 'papaya', 'manzana', 'manzana', 'plátano', 'melón', 'aguacate', 'melón', 'manzana', 'manzana', 'papaya', 'plátano']

//Respuesta con ciclo FOR
let manzana = 0
let plátano = 0
let sandía = 0
let melón = 0
let aguacate = 0

for (let contador = 0; contador < frutas.length; contador ++){
    if(frutas[contador] == 'manzana'){
        manzana++;
    }else if (frutas[contador] == 'plátano'){
        plátano++;
    }else if (frutas[contador] == 'sandía'){
        sandía ++;
    }else if (frutas[contador] == 'melón'){
        melón ++;
    }else if (frutas[contador] == 'aguacate'){
        aguacate ++;
    }
}

console.log('(FOR) Manzanas:', manzana, "/ Plátanos:", plátano, "/ Sandías:", sandía, '/ Melones:', melón, '/ Aguacate:', aguacate);

//Respuesta con ciclo WHILE
let manzanaWhile = 0
let plátanoWhile = 0
let sandíaWhile = 0
let melónWhile = 0
let aguacateWhile = 0

let contadorWhile = 0

while (contadorWhile < frutas.length){
    if(frutas[contadorWhile] == 'manzana'){
        manzanaWhile ++;
    }else if (frutas[contadorWhile] == 'plátano'){
        plátanoWhile ++;
    }else if (frutas[contadorWhile] == 'sandía'){
        sandíaWhile ++;
    }else if (frutas[contadorWhile] == 'melón'){
        melónWhile ++;
    }else if (frutas[contadorWhile] == 'aguacate'){
        aguacateWhile ++;
    }
    contadorWhile ++;
}

console.log('(WHILE) Manzanas:', manzana, "/ Plátanos:", plátano, "/ Sandías:", sandía, '/ Melones:', melón, '/ Aguacate:', aguacate);