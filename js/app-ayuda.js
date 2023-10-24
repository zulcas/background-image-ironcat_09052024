const pictures = [
  "contBcg-0",
  "contBcg-1",
  "contBcg-2",
  "contBcg-3",
  "contBcg-4",
];

// Variable de estado para saber en qué índice de foto nos encontramos
let index = 2;

// Cargo la primera imagen
let slider = document.querySelector(".img-container");
slider.style.backgroundImage = `url('./img/${pictures[index]}.jpeg')`;

// buena suerte

//1. Seleccionamos botón izquierdo
const buttonLeft = document.querySelector(".btn-left");

//2. Seleccionamos botón derecho
const buttonRight = document.querySelector(".btn-right");

buttonLeft.addEventListener("click", checkArrowClicked);
buttonRight.addEventListener("click", checkArrowClicked);

function checkArrowClicked(event) {
  console.log(
    "Has pulsado el siguiente botón. Puede ser una buena idea ponerle un id. ",
    event.target
  );

  // Si has pulsado el botón de la derecha, incrementar index en una unidad. Si has pulsado el botón de la izquierda, decrementar index en una unidad

  // Acceder a pictures[index] para recuperar la foto adecuada, que se encuentra en la carpeta img

  // Actualizar la propiedad de style adecuada del objeto .container para establecer su imagen de fondo
}
