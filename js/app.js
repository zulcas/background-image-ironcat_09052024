const pictures = [
  "https://cdn2.thecatapi.com/images/1bn.png",
  "https://cdn2.thecatapi.com/images/eds.jpg",
  "https://cdn2.thecatapi.com/images/c38.jpg",
  "https://cdn2.thecatapi.com/images/53h.jpg",
  "https://cdn2.thecatapi.com/images/9hl.jpg"
];

/**
 * ¿Qué variable de estado vamos a necesitar?
 * ¿Cómo se establece la imagen de fondo de un elemento mediante un estilo en línea?
 */

//Creamos las funciones slider left y right
function sliderMoveLeft (){
  
  if(pictureNumber > 0){
    pictureNumber --;
    imageContainer.style.backgroundImage = `url('${pictures[pictureNumber]}')`;
    console.log(pictureNumber)
  }
  else{
    pictureNumber = pictures.length-1;
    imageContainer.style.backgroundImage = `url('${pictures[pictureNumber]}')`;
    console.log(pictureNumber);

  }

}
function sliderMoveRight(){
  if(pictureNumber < pictures.length-1){
    pictureNumber++;
    imageContainer.style.backgroundImage = `url('${pictures[pictureNumber]}')`;
    console.log(pictureNumber)
  }
  else{
    pictureNumber = 0;
    imageContainer.style.backgroundImage = `url('${pictures[pictureNumber]}')`;
    console.log(pictureNumber)
  }

}

//Variables de estado
let pictureNumber = 0;
let imageContainer = document.querySelector('.img-container');

//Inicializamos primera imagen
document.querySelector('.img-container').style.backgroundImage = `url('${pictures[0]}')`;


//1)Creamos evento click para cada boton
let buttonLeft = document.querySelector('.btn-left');
let buttonRight = document.querySelector('.btn-right');

//2)Asociamos click a cada boton
buttonLeft.addEventListener('click', sliderMoveLeft)
buttonRight.addEventListener('click', sliderMoveRight)