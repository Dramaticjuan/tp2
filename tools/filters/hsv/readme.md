# Filtros HSV

Los filtros HSV modifican el método `process_pixel(i, image)` modificando alguno de los valores H,S,V que se generan con sus métodos propios.

## Métodos propios 
```
rgb_to_hsv(rgb)
```
Recibe un arreglo con tres valores que representan un color en formato RGB.
Devuelve un arreglo con tres valores que representan un color en formato HSV.

```
hsv_to_rgb(hsv)
```
Recibe un arreglo con tres valores que representan un color en formato HSV.
Devuelve un arreglo con tres valores que representan un color en formato RGB.

## Hijos del Filtro HSV
### Saturación
Suma 0.2 a S y si se sale del rango [0,1] devuelve el valor maximo.
El efecto logrado es subir la saturación de la imagen.

### Brightness
Suma 0.2 a V y si se sale del rango [0,1] devuelve el valor maximo.
El efecto logrado es subir el brillo de la imagen.


## Recursos

### Algoritmo
https://stackoverflow.com/questions/17242144/javascript-convert-hsb-hsv-color-to-rgb-accurately
### Utilidades
Para testear usé el color picker de google.
### Teoría
https://www.youtube.com/watch?v=pjo3wP_yt2A
https://en.wikipedia.org/wiki/HSL_and_HSV