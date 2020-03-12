# Seguimos interactuando con una API remota

## Modificaciones a partir de la clase pasada

A partir de lo de la clase pasada de `nodejs-api-museos` se piden las siguientes cosas:
* Modificar el ejercicio de la clase pasada para que además de traer museos y escribir nombre más teléfono en `museos.txt`, que traiga organismos y escriba los nombres en otro archivo `organismos.txt`. Que haga estas dos cosas al mismo tiempo. La url de la API para traer organismos está en `index.js`. 
* Modificar el ejercicio de la clase pasada para que __luego__ de traer los museos, sea el mismo callback el que se encargue de escribir `museos.txt` __y__ traer los organismos (que a su vez encargará de escribir `organismos.txt`.)
* Modificar alguno de los anteriores dos puntos para que lea `organismos.txt` y lo muestre por pantalla.