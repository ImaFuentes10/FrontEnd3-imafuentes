const buscador = document.getElementById('buscador')
const listaFrutas = document.getElementById('lista')

buscador.addEventListener("input",()=>{
    const buscador = document.getElementById('buscador')
    let itemsFruta = listaFrutas.getElementsByTagName("li")
    let texto = buscador.value.toLowerCase()
    

    console.log(itemsFruta);
    console.log(texto);

    for(let i = 0; i < itemsFruta.length; i++){
        let textoFruta = itemsFruta[i].textContent.toLowerCase()
    /*
        //includes() se usa para verificar si una cadena contiene una subcadena
        if(textoFruta.includes(texto)){ | 
            //Si lo que estoy escribiendo esta incluída en el nombre de la fruta
            //entonces la fruta se despliega en la pantalla
            itemsFruta[i].style.display = "block" //Muestro coincidencias
    */
   
//startsWith() verifica si una cadena inicia con la subcadena
        if(textoFruta.startsWith(texto)){
            itemsFruta[i].style.display = "block" //Muestro coincidencias
        }else{
            //Si la fruta no coincide
            itemsFruta[i].style.display = "none" //Oculto las que no coinceiden
        }
    }
})