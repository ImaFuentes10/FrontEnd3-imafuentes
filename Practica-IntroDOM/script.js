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