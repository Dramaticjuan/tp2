# Filters

```
filter(image)
```
Recibe una imagen en formato imageData y por cada pixel llama la método `apply_filter(i, image)`

```
apply_filter(i, image)
```
Recibe la posición del pixel y un imageData, separa el rgb del pixel seleccionado en tres variables distintas, llama a `process_pixel(r,g,b)` pasando como parametro las variables recién nombradas, por ultimo envía el resultado del pixel procesado y su posición a `push_pixel(i, rgb)`

```
proces_pixel(r,g,b)
```
Recibe tres valores que unidos representan un color en formato RGB, devuelve un arreglo con tres valores que representan un color en formato RGB.

```
push_pixel(i, rgb)
```
Recibe una posición y un arreglo con tres valores que representan un color en formato RGB. Dada la posición, coloca cada valor en la posición correspondiente del arreglo `data` en el atributo output.

```
render()
```
Genera un button en html con en evento "click" en el que llama el metodo add_filter de la clase Img, el valor pasado por parametro es el propio objeto Filter.