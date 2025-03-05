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

    //Creo variable de fecha
    let fecha = new Date()
    //console.log (fecha); //Imprimimos fecha como prueba

    const comentario = document.getElementById("comentarios-area").value
    const divComentario = document.createElement('div') //Creamos div para contener a 'li' y 'button'
    const item = document.createElement('li')
    const botonEliminar = document.createElement('button')
    const textoFecha = document.createElement('p')

    let nuevoComentario = new Comentario(comentario)
    //console.log(nuevoComentario); //Prueba de impresión para ver que se imrpime el texto
    
    item.textContent = nuevoComentario.mostrarComentario();
    botonEliminar.textContent = 'X'
    comentariosClientes.appendChild(divComentario)
    //Creamos 'li'(item) y 'button'(botonEliminar) dentro del 'div'(divComentario) anterior para poder dar estilo a comentario con boton
    divComentario.appendChild(item)
    divComentario.appendChild(botonEliminar) 
    textoFecha.textContent = fecha;
    comentariosClientes.appendChild(textoFecha)  

    formulario.reset()

//Boton para eliminar cada comentario
botonEliminar.addEventListener('click', function(event){
    //console.log(event); // Prueba de impresión para ver que se registra el evento
    comentariosClientes.removeChild(divComentario) //Quitamos divComentario
    comentariosClientes.removeChild(textoFecha)
})

//Boton Limpiar para quitar todos los comentarios
botonEliminarTodo.addEventListener('click',()=>{
    comentariosClientes.removeChild(divComentario)
    comentariosClientes.removeChild(textoFecha)
})
/*Al hace esta acción 2 veces me sale el siguiente error:
Uncaught DOMException: Node.removeChild: The node to be removed is not a child of this node
Aún así, sigue funcionando. 
Supongo que es porque estos nuevos hijos que remuevo no son hijos del originalmente eliminé, pero sigue haciendo la acción
*/

})
