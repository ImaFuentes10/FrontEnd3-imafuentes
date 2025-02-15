// Práctica - Comparaciones y Decisiones en Javascript

let nota = 84

if (nota < 0 || nota > 100){
    console.log("Error en la captura de calificación")
}else if(nota >= 90){
    console.log("Calificación:", nota, ". Excelente!")
}else if (nota >= 75 ){
    console.log("Calificación:", nota, ". Bien!")
}else if (nota >= 60){
    console.log("Calificación:", nota, ". Suficiente")
}else if (nota < 60){
    console.log("Calificación:", nota, ". No Aprobó")
}