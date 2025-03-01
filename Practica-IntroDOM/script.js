//Práctica - Introducción al DOM en JavaScript

//Ejercicio 1: Cambiar contenido con un botón
let tituloCambio = document.getElementById('titulo-cambio')
let parrafoCambio = document.getElementById('parrafo-cambio')
let botonCambio = document.getElementById('boton-cambio')

botonCambio.addEventListener('click', ()=>{

    if (tituloCambio.innerHTML == '¡Contenido actualizado!'){
        tituloCambio.innerHTML = '¡Bienvenido a mi página!';
        parrafoCambio.innerHTML = 'Este es el contenido inicial';
    }else{
        tituloCambio.innerHTML = '¡Contenido actualizado!';
        parrafoCambio.innerHTML = 'El contenido ha sido cambiado';
    }
})


//Ejercicio 2: Mostrar u ocultar contenido
let botonMostrar = document.getElementById('boton-mostrar')
let parrafoMostrar = document.getElementById('parrafo-mostrar')

botonMostrar.addEventListener('click', ()=>{

    if(botonMostrar.textContent == 'Ocultar contenido'){
        botonMostrar.textContent = 'Mostrar contenido';
        parrafoMostrar.style.display = 'none';
    }else{
        botonMostrar.textContent = 'Ocultar contenido';
        parrafoMostrar.style.display = 'block';
    }
})


//Problema: Caja de comentarios
class Comentario {
    constructor(comentario) {
        this.comentario = comentario
    }
    mostrarComentario(){
        return this.comentario
    }
}

let prueba = new Comentario('prueba')
//console.log(prueba.mostrarComentario()) //Pruebade impresión para ver que se registra el texto ingresado

//Creo const de las dos secciones a interaccionar en el ejercicio
const formulario = document.getElementById("comentarios-form")
const comentariosClientes = document.getElementById('comentarios-clientes')
const botonEliminarTodo = document.getElementById("boton-eliminar-todo")

//Envío de comentario y creación de elementos
formulario.addEventListener('submit', function(event){
    event.preventDefault()
    //console.log(event) //Prueba de impresión para ver que se imprima el evento

    const comentario = document.getElementById("comentarios-area").value
    const divComentario = document.createElement('div') //Creamos div para contener a 'li' y 'button'
    const item = document.createElement('li')
    const botonEliminar = document.createElement('button')
    

    let nuevoComentario = new Comentario(comentario)
    //console.log(nuevoComentario); //Prueba de impresión para ver que se imrpime el texto
    
    item.textContent = nuevoComentario.mostrarComentario();
    botonEliminar.textContent = 'X'
    comentariosClientes.appendChild(divComentario)
    //Creamos 'li'(item) y 'button'(botonEliminar) dentro del 'div'(divComentario) anterior para poder dar estilo a comentario con boton
    divComentario.appendChild(item)
    divComentario.appendChild(botonEliminar)   

    formulario.reset()

//Boton para eliminar cada comentario
botonEliminar.addEventListener('click', function(event){
    //console.log(event); // Prueba de impresión para ver que se registra el evento
    comentariosClientes.removeChild(divComentario) //Quitamos divComentario
})

//Boton Limpiar para quitar todos los comentarios
botonEliminarTodo.addEventListener('click',()=>{
    comentariosClientes.removeChild(divComentario)
})
/*Al hace esta acción 2 veces me sale el siguiente error:
Uncaught DOMException: Node.removeChild: The node to be removed is not a child of this node
Aún así, sigue funcionando. 
Supongo que es porque estos nuevos hijos que remuevo no son hijos del originalmente eliminé, pero sigue haciendo la acción
*/

})

