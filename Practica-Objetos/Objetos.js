//Práctica Programación Orientada a Objetos (POO)

//Ejercicios lección
//Objeto simple
const auto = new Object();
auto.marca = "Toyota";
auto.modelo = "Corolla";
auto.año = 2020;

console.log(auto);

//Clase con método para imprimir información del objeto
class Coche {
    constructor(marca, modelo, año){
        this.marca = marca
        this.modelo = modelo
        this.año = año
    }

//Método para imprimir info del coche
    mostrarInfo (Coche){
        console.log(Coche);
    }

//Método para imprimir sólo la marca del coche
    mostrarMarca (){
        return this.marca;
    }
}

let coche1 = new Coche("Nissan", 'Pathfidner', 2018) //Defino coche1
coche1.mostrarInfo(coche1); //Llamo a método mostrarInfo
console.log("La marca del coche es", coche1.mostrarMarca()); //Llamno a método mostrarMarca

//segudno objeto modelado
class Mascota {
    constructor(nombre, especie, raza, tamaño, color){
        this.nombre = nombre
        this.especie = especie
        this.raza = raza
        this.tamaño = tamaño
        this.color = color
    }

    //Método apra mostrar informaciñon de la mascota
    mostrarInfoMascota (Mascota){
        console.log(Mascota);
    }

    //Método para mostrar la información de la mascota  en una oración descriptiva
    mostrarInfoMascota2 (Mascota){
        console.log(this.nombre, 'es un', this.especie, "de raza", this.raza, "tamaño", this.tamaño, 'y de color', this.color[0], "con", this.color[1] );
    }
}

//Declaramos los objetos (mascotas)
let Billy = new Mascota('Billy','Perro', 'Mestiza', 'Grande', ["Amarillo", "Blanco"])
let Mobula = new Mascota('Mobula','Perro', 'Mestiza', 'Grande', ['Negro', 'Blanco'])

//Llamados a métodos
Billy.mostrarInfoMascota(Billy);
Mobula.mostrarInfoMascota(Mobula);
Billy.mostrarInfoMascota2(Billy);
Mobula.mostrarInfoMascota2(Mobula);


//Problema: Crear objeto a partir de un Libro
class Libro {
    constructor(titulo, autor, año, estado, capitulos){
        this.titulo = titulo
        this.autor = autor
        this.año = año
        this.estado = estado
        this.capitulos = capitulos
    }

    //Método que imprime la información del libro
    describirLibro(Libro){
        console.log('Libro titulado', this.titulo, ', escrito por', this.autor, 'en el año', this.año, ', su estado es:', this.estado);
    }

    //Método que imprimie los capítulos del libro
    mostrarCapitulos(){
        console.log('Los capítulos de', this.titulo, "registrados son:", this.capitulos)
    }
//.push y .unshift requieren un parámetro para arguento para funcionar, en este caso se utiliza la clase 'Libro'
    //Método que agrega un capítulo al final
    agregarCapituloAlFinal(Libro){
        this.capitulos.push(Libro)
        console.log('Los capítulos de', this.titulo, "registrados son:", this.capitulos);
    }

    //Método que agrega un capítulo al inicio
    agregarCapituloAlInicio(Libro){
        this.capitulos.unshift(Libro)
        console.log('Los capítulos de', this.titulo, "registrados son:", this.capitulos);
    }

    //Método que elimina un capítulo al final
    quitarUltimoCapitulo(){
        this.capitulos.pop()
        console.log('Los capítulos de', this.titulo, "registrados son:", this.capitulos);
    }

    //Método que elimina un capítulo al inicio
    quitarPrimerCapítulo(){
        this.capitulos.shift()
        console.log('Los capítulos de', this.titulo, "registrados son:", this.capitulos);
    }
}

//Declaro libros
let libro1 = new Libro('"Harry Potter"', 'J.K. Rowling', 1997, 'DISPONIBLE', ['El niño que sobrevivió', 'El vidrio que se desvaneció'])
let libro2 = new Libro('"Fahrenheit 451"', 'Ray Bradbury', 1953, 'PRESTADO', ['El hogar y la salamandra', 'El tamiz y la arena'])

//Llamo a la información de los libros
libro1.describirLibro(libro1);
libro2.describirLibro(libro2);

//Ejemplo de funcionamiento de cada método
libro1.mostrarCapitulos();
libro1.agregarCapituloAlFinal('Las cartas de nadie');
libro1.agregarCapituloAlInicio('Prólogo');
libro1.quitarUltimoCapitulo();
libro1.quitarPrimerCapítulo();
libro1.mostrarCapitulos();