let counter = 0;

document.addEventListener("DOMContentLoaded", function() {
    let boton = document.getElementById("boton");
    boton.addEventListener("click", ContadorLikes );
});


function ContadorLikes() {
    counter += 1; // Incrementa el contador
    let contadorElemento = document.querySelector("#contador"); // Selecciona el elemento para mostrar el contador
    contadorElemento.innerText = "Likes: "+ counter; // Actualiza el texto
};