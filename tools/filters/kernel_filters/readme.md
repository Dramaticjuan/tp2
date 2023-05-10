# Filtros con kernels

Los filtros con kernel modifican el método `apply_filter(i, image)` de la siguiente manera: llama el método convolve con la imagen, la posicion del pixel a modificar y el kernel (que es lo varía en cada filtro con kernel), luego con los valores recibidos (output y kernel_val) se llama el método `color_average(output, kernel_val)` que devuelve un color, para finalizar llamando a `push_pixel(i, rgb)` con el color devuelto por este último.

## Métodos propios 
```
convolve(image,i,kernel)
```
Recibe una imagen en formato imageData, una posición y un kernel (un arreglo bidimensional de n filas y n columnas donde n es impar)
Devuelve un arreglo bidimensional de el mismo tamaño que el kernel recibido y la suma de todos los valores del kernel recibido.

El paso a paso de todo el método es el siguiente:
1. Transforma la posición recibida por parámetro de uni dimensional a bidimensional (x,y)
2. Genera un arreglo auxiliar donde se va a colocar el output
3. Calcula y almacena el punto medio del kernel recibido
4. Genera una variable para guardar la suma de los valores del kernel recibido
5. Se recorre cada columna del kernel y por cada una se genera un arreglo vacío en el auxiliar output
6. Por cada fila en cada columna del kernel:
    1. Se calcula la posición bidimensional del kernel con el punto medio del kernel menos la posición en la fila para `x` y el punto medio menos la posición en la columna para `y`.
    2. Se chequea si la suma entre la posición bidimensional del kernel con la posición bidimensional de la posición recibida por parametro está dentro de las dimensiones de la imagen.
        1. Si uno de los valores bidimensionales está fuera, devuelve el valor del borde más cercano.
        2. Si está dentro, devuelve el valor recibído.
    3. Transforma los valores devueltos en el paso 2 a valores unidimensionales.
    4. Multiplica los tres colores rgb del pixel del parametro por el valor del kernel en la posición actual y los guarda en el arreglo vacío en el auxiliar output generado para la columna correspondiente.
    5. Suma el valor del kernel en la posición actual a la variable que guarda la suma de los valores del kernel
7. Devuelve una tupla con el arreglo donde colocó el output y la suma de los valores del kernel

```
color_average(arr, val)
```
Recibe un arreglo bidimensional de n filas por 3n columnas, los valores de la columna son r,g,b y un valor.
Devuelve un arreglo con tres valores que representan un color en formato RGB.
Se suman todos los r, todos los g y todos los b. Se devuelve un arreglo con las sumas divididas por el valor recibido por parámetro.

```
check_border(i, offset, image)
```
Recibe dos posiciones bidimensionales y una imagen en formato imageData.
Devuelve una posición bidimensional.
Suma las `x` y las `y` de las posiciones recibidas por parametro y chequea si las coordenadas están en el rango de la imagen [0, ancho dela imagen] y [0, altura de la imagen], si está fuera,  devuelve el borde mas cercano.

```
position_data_to_coordinate(i, image)
```
Recibe una posición unidimensional y una imagen en formato imageData.
Devuelve una posición bidimensional.

```
coordinate_to_position_data(x, y, image)
```
Recibe dos valores numericos y una imagen.
Devuelve una posición unidimensional y una imagen en formato imageData.

## Recursos
https://setosa.io/ev/image-kernels/
https://en.wikipedia.org/wiki/Kernel_(image_processing)