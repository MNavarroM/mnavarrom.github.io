/**Completar el código JavaScript proporcionado para que:
 * Al mover el ratón en cualquier punto de la ventana del navegador, se muestre la posición
 * del puntero respecto del navegador y respecto de la página:
 * Información que se muestra para los eventos del ratón
 * Para mostrar los mensajes, utilizar la función muestraInformacion() deduciendo su
 * funcionamiento a partir de su código fuente.
 * Al pulsar cualquier tecla, el mensaje mostrado debe cambiar para indicar el nuevo
 * evento y su información asociada:
 * Información que se muestra para los eventos del teclado
 * Añadir la siguiente característica al script: cuando se pulsa un botón del ratón,
 * el color de fondo del cuadro de mensaje debe ser amarillo (#FFFFCC) y cuando se pulsa
 * una tecla, el color de fondo debe ser azul (#CCE6FF). Al volver a mover el ratón, el
 * color de fondo vuelve a ser blanco.
 * El color de fondo del cuadro de información cambia en función del tipo de evento
 * @author Mario Navarro Madrid
 */

 {

    window.addEventListener("load",init);

    function init(){
        document.addEventListener("mousemove",showCoordenadas);
        document.addEventListener("keypress", showKeyboard);
        document.addEventListener("click", colorMouse);
    }

    function colorMouse(){
        document.getElementById("info").style.backgroundColor = "#FFFFCC";
    }

    function showKeyboard(elEvento) {
        muestraInfo(['<h1>Teclado</h1>','<p>Carácter['+elEvento.charCode+']</p>',
        '<p>Código['+elEvento.keyCode+']</p>']);
        document.getElementById("info").style.backgroundColor = "#CCE6FF";
    }

    function showCoordenadas(elEvento) {
        muestraInfo(['<h1>Ratón</h1>','<p>Navegador['+elEvento.clientX+','+elEvento.clientY+']</p>',
        '<p>Pantalla['+elEvento.screenX+','+elEvento.screenY+']</p>']);
        document.getElementById("info").style.backgroundColor = "white";
    }

    function muestraInfo(mensaje){
        document.getElementById("info").innerHTML = mensaje[0] + mensaje[1] + mensaje[2];
    }


 }