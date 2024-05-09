const pictures = [
  "https://cdn2.thecatapi.com/images/1bn.png",
  "https://cdn2.thecatapi.com/images/eds.jpg",
  "https://cdn2.thecatapi.com/images/c38.jpg",
  "https://cdn2.thecatapi.com/images/53h.jpg",
  "https://cdn2.thecatapi.com/images/9hl.jpg"
];

// Variable de estado para saber en qué índice de foto nos encontramos
let index = 0;

// Cargo la imagen que apunta la variable de estado
let slider = document.querySelector(".img-container");
slider.style.backgroundImage = `url(${pictures[index]})`;

// buena suerte

//1. Seleccionamos botón izquierdo
const buttonLeft = document.querySelector(".btn-left");

//2. Seleccionamos botón derecho
const buttonRight = document.querySelector(".btn-right");

buttonLeft.addEventListener("click", function () {
  console.log("Flecha izquierda pulsada");
});
buttonRight.addEventListener("click", function () {
  console.log("flecha izquierda pulsada");
});
