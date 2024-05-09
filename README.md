# Slider de imágenes

Implementa el siguiente slider, donde todas rutas a las imágenes se encuentran en un array de fotos en el mismo app.js

[Demo](https://js-beginners.github.io/background-image-slider-project/)

1. Asocia dos eventos __click__ a cada uno de los botones. Comprueba que funciona correctamente haciendo un simple console.log cuando hagas clic en cada uno de ellos.
2. Muestra la imagen de la posición 0 del array como fondo del contenedor del __slider__ . Para este punto, has de tener claro como poner una imagen de fondo con CSS.
3. Cada vez que hagas clic en el botón derecho, debes incrementar en uno el índice del array, y actualizar la foto de fondo del contenedor. Hay que hacer algo similar para el botón izquierdo.
4. En algún momento, vas a llegar a la posición **pictures.length-1**. Pero la posición  **pictures.length** no existe! ¿Qué debemos hacer?
