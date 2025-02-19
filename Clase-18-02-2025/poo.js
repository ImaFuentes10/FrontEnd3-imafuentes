/*
    POO
    - CLASE: Es una plantilla para crear objetos. Define atributos y métodos.
    Se define con la palabra clase 'class', seguida del nombre empezando con mayúscula y en singular.
    - OBJETO: Es la instancia de una clase, con sus propios valores para los atributos
    definidos de la clase.
    - ATRIBUTOS: Son las características o propiedades de una clase.
    - MÉTODOS: Son las funciones dentro de una clase que dfinen el comportamiento de los objetos.
    - CONSTRUCTOR: Es un método especial de una clase que se ejecuta autamáticamente al crear
    un objeto. Sirve para iniciaizar los atributos de la clase.
*/

//PASO 1. Definición de una clase con sus atributos y métodos
class Persona {

    //ATRIBUTOS dentro del CONSTRUCTOR
    constructor(nombre, edad, nacionalidad){
        this.nombre = nombre
        this.edad = edad
        this.nacionalidad = nacionalidad
    }

    //MÉTODOS de la CLASE
    saludar(){
        console.log("Hola, mi nombre es", this.nombre, ", tengo", this.edad, "años y soy de nacionalidad", this.nacionalidad);

    }

    //Nota: Los métodos pueden incluir parámetros para utilizarlos dentro de su implementación
    despedir(nombreAmigo){
        console.log("Hasta luego", nombreAmigo);
    }
}

//PASO 2. Creación de los objetos a partir de la clase
let persona1 = new Persona("Pedro", 23, "Mexicana")

console.log(persona1); //Imprimimos a nuestro objeto recién creado

//PASO 3. Llamar a los métodos de mi objeto
persona1.saludar();

//Ejercicio: Crear un onjeto a partir de la claase persona con los datos de:
// nombre = Lucía, edad = 30, nacionalidad = Canadiense

let persona2 = new Persona("Lucía", 30, "Canadiense")
console.log(persona2);
persona2.saludar();

//Ejercicio 2: Lucía se despide de Mario
persona2.despedir("Mario");
persona1.despedir("Fernando");