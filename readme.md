## todo:
- [x] Add style to applied filter div
- [x] HSV filters
- [x] Start page (choose blank canvas or image)
    - [x] Generate canvas at demand
    - [x] Show inputs for each one
- [x] Show information and state of each section
applied via enabling// disabling buttons

- [x] Download the edited image
- [x] resize image or canvas

### optional
- [ ] Change styles 


# Documentación
## index.js
El archivo index.js está divido en las siguientes secciones:

### Get DOM Elements
Obtengo los elementos del DOM que voy a usar

### Generación de instancias
Genero instancias de las todas clases que armé

### Lógica de canvas
Agrego event listeners a los botones que administran el estado del canvas y los inputs de todas las tools.
- file_input se encarga de pasarle la foto original al objeto img, generar un canvas del tamaño de la imagen y habilitar los inputs de todas las tools.
- reset_image se encarga de borrar sacarle todos los filtros a la imagen.
- reset_canvas se encarga de generar un canvas y habilitar los inputs de pen, pen_color y eraser si no hay nada dibujado y si hay algo dibujado, elimina todo y genera un canvas nuevo. 
- download_button llama a función download_image, solo está habilitado si hay un canvas o imagen.

### Lógica de pen
Agrega los event listeners al canvas para que pen empiece a dibujar cuando se aprieta el click y deje de dibujar cuando se salga del canvas o se levante el click.

### Lógica del color
Cambia el estilo de los inputs y el estado de pen. Dependiendo del estado del pen la funcion pen_color devuelve el color default del canvas o el color seleccionado con input_color.

### Render helpers
En esta seccion hay funciones que sirven para renderizar un array de tools, desabilitar los hijos de un nodo y habilitar los hijos de un nodo.

## utils.js
`function resize_canvas(ancho, alto)` Cambia el ancho y el alto del canvas.
`function generate_white_canvas()` Genera un rectángulo del tamaño del canvas con el color default.
`function clear_canvas()` Elimina todos los inputs que genera la imagen, coloca en null a la imagen, deshabilita los inputs de los filtros, borra todos los input que recibio file_input y genera un canvas blanco de 300x300
`function download_image()` Genera un elemento anchor que descarga una imagen 'filename.png' que es una copia del canvas y clickea el archor generado.  

# Recursos

Los recursos de cada otra sección está destacado en cada sección.
https://stackoverflow.com/questions/8126623/downloading-canvas-element-to-an-image