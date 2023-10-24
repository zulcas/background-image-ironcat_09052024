const pictures = [
  "contBcg-0",
  "contBcg-1",
  "contBcg-2",
  "contBcg-3",
  "contBcg-4",
];

// Variable de estado para saber en qué índice de foto nos encontramos
let index = 2;

// Cargo la imagen que apunta la variable de estado
let slider = document.querySelector(".img-container");
slider.style.backgroundImage = `url('./img/${pictures[index]}.jpeg')`;

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
