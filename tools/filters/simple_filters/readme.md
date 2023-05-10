# Simple filters

En los filtros simples el único metodo modificado de la clase padre es `process_pixel(r,g,b)`, cada uno transforma cada color de distinta manera descripta a continuación.

## Hijos del simple filter
### Binarization
Suma los tres valores r,g,b, les resta el maximo posible de estos valores (255+255+255), si la resta da un numero mayor a cero devuelve blanco y si es menor a cero devuelve negro.
El efecto logrado es que todos los pixeles pasen a ser de un valor de dos valores, por eso se llama binarización.

### Gray Scale
Busca el promedio entre los valores r,g,b y devuelve dicho promedio en cada valor rgb. 
El efecto logrado es que todos los pixeles sean en la escala de gris porque tres valores iguales de r,g,b dan como resultado un gris.

### Negative
El nuevo valor de cada rgb es la diferencia entre maximo valor posible de rgb (255) y el valor r,g,b anterior.
El efecto logrado es que todos los pixeles sean su color opuesto, por ejemplo el opuesto de negro (0,0,0) va a ser blanco (255,255,255)

### Sepia
Cada valor es transformado por valores preseteados que generan un efecto de foto antigua en blanco y negro amarillenta

## Recursos
Se comentaron todos en clase.