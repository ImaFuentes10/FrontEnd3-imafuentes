//HERENCI

//Paso 1. Creación de la clase principal (clase padre, superclase)
class Persona {
    constructor(nombre, edad){
        //En el constructor inicializamos los atributos de la clase
        this.nombre = nombre
        this.edad = edad
    }

    //Métodos de la clase
    saludar(nombrePersona){
        console.log("Hola,", nombrePersona);
    }
}

let persona1 = new Persona("Pepe", 30, ["Educación Física", "Cálculo"])
console.log(persona1);
//console.log(persona1.obtenerMaterias()); -> Esto da error porque no está aquí, está heredada en el hijo 'Estudiante'

//Paso 2. Crear una subclase (Estudiante)
class Estudiante extends Persona {
    constructor(nombre, edad, materias){
        //Para poder heredar los atributos de la clase padre, tengo que llamar primero
        //al superconstructor (de la superclase)
        super(nombre, edad)
        /* 
        el método super () es equivaente a si yo copiara y pegara los atributos y métodos de 'Persona'
        this.nombre = nombre
        this.edad = edad
        */
        this.materias = materias //nuevo parámetro
    }

    obtenerMaterias(){
        return this.materias;
    }
}

let estudiante1 = new Estudiante("Maria", 23, ["Español", "Matemáticas"])
console.log(estudiante1);
console.log(estudiante1.obtenerMaterias());

let estudiante2 = new Estudiante("Luis", 28, ["Inglés", "Letras"])
console.log(estudiante2);

class EstudianteMusica extends Estudiante{
    constructor(nombre, edad, materias, instrumento){
        super(nombre, edad, materias)
        this.instrumento = instrumento
    }

    //Métodos
}

let estudianteMusica1 = new EstudianteMusica ("Juan", 24, ["Historia", "Solfeo"], "Guitarra")
console.log(estudianteMusica1);
console.log(estudianteMusica1.obtenerMaterias());
estudianteMusica1.saludar("Felipe");
/*
console.log(estudianteMusica1.saludar(""));
Esto nos daría una imprsión de 'undefined' después de imprimir el saludo
Esto sucede porque estamos mandando a imprimir un console.log dentro de otro
Se ejecuta lo de adentro primero y luego lo de afuera no tiene definido su contenido
Esto es diferente a lo que se ve en console.log(estudianteMusica1.obtenerMaterias());
porque aquí el método no es un console log, solo regresa el valor y lo imprimimos aquí
*/