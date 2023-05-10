# Tool
Esta clase existe solo por la formalidad de que otras clases la hereden y tengan el metodo y el atributo parent.
La idea de todas las tools es que tengan un componente visual renderizable.
# Pen
Lo unico que cambié de la lógica que nos dieron en clase es que un solo pen hace todos los dibujos, la manera es que cada vez que deja de dibujar pone en null la pos_X y pos_y, entonces cuando empieza a dibujar pregunto si ant_x y ant_y son nulas y las igualo a pos_x y pos_y.
```
not_pen()
```
Complementa la lógica del color en el archivo index.js

# Img (img handler)
Imagen no extiende de tool porque los componente visuales que renderiza son los filtros aplicados, no la propia imagen, por eso ademas puse en los parentesis que es un handler, es una interfaz completa con la modificar o cargar una imagen.

```
draw()
```
Si no se generó una copia de la imagen original, llama el metodo `generate_copy_image()` para generarla, sino sibuja la imagen en el canvas.

```
reset_image()
```
Remueve todos los filtros y genera una copia de la imagen original.

```
generate_copy_image()
```
Coloca null en el valor de copy_image, dibuja la imagen original en el canvas y coloca una copia de la imagen dibujada en el canvas en el valor de la copy_image.

```
add_filter(filter)
```
Recibe un objeto de clase Filter como parámetro.
Genera el input del filtro añadido.
Aplica el filtro en la imagen.
Dibuja la imagen.

```
remove_filter(index)
```
Recibe una posición por parámetro.
Remueve del arreglo de filtros aplicados el filtro en la posición recibida por parámetro.
Aplica todos los filtros del arrglo de filtros aplicados.
Renderiza los inputs de los filtros aplicados.
Dibuja la imagen.

```
remove_all_applied_filters()
```
Vacía el arreglo de filtros aplicados.
Renderiza los inputs de los filtros aplicados.

```
use_filter(filter)
```
Recibe un objeto de clase Filter como parámetro.
Llama al metodo `filter(image)` del filtro recibido por parámetro, le envía como parametro la copía de la imagen.

```
use_all_applied_filters()
```
Llama el método `filter(image)` con cada filtro del arreglo de filtros aplicados

```
set_image(image_src)
```
Recibe un File de html como parametro.
Coloca en null el valor de copy_image
Llama a `remove_all_applied_filters()` 
Si el valor recibido por parametro es null, coloca en null el valor de la imagen orginal, sino genera un `Image()` con un objetURL generado con el File como fuente.

```
render_applied_filter(posición)
```
Recibe una posición por parametro.
Genera un input.
Le añade un event listener que al ser clickeado llama a `remove_filter(i)` donde i es la posición dada por parametro.
Le añade un event liestener que al ser clickeado se destruya.
Renderiza el input.

```
delete_applied_filters_inputs()
```
Vacía el innterText del padre de los inputs generados.

```
rerender_all_applied_filters()
```
Llama a `delete_applied_filters_inputs()`.
Llama a `render_applied_filter()` por cada filtro en el arreglo de filtros aplicados.