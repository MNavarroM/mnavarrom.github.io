
¿Cómo se trata el envío de una parámetro a php?.Indica todos los pasos (html, javascript, php) 
En html he creado un input tipo text donde voy a escribir el nombre a buscar. En JavaScript voy a recoger su valor a través del método .val()
de jQuery. Una vez almacenado, lo mando a través del data que envío con el $.get. Una vez en PHP compruebo si llega dicho parámetro y lo almaceno
para posteriormente comprobar si existe una coincidencia en el array de nombres.

Atributo donde se recibe la respuesta 
Se recibe en el parámetro data(o el nombre que se la haya dado) en la respueste de la petición ajax. Como viene en formato JSON, la parseo
y mediante un foreach voy recogiendo los valores.
