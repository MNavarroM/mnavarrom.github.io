/**Completar el código JavaScript proporcionado para que cuando se pinche sobre el enlace
 * se muestre completo el contenido de texto. Además, el enlace debe dejar de mostrarse
 * después de pulsarlo por primera vez. La acción de pinchar sobre un enlace forma parte de
 * los "Eventos" de JavaScript que se ven en el siguiente capítulo. En este ejercicio,
 * sólo se debe saber que al pinchar sobre el enlace, se ejecuta la función llamada muestra().
 * @author Mario Navarro Madrid
 */

 {

    function muestra() {
        let enlace = document.getElementById("adicional");
        enlace.className = "visible";
        let a = document.getElementById("enlace");
        a.className = "oculto";
    }

    function init() {
        document.getElementById("enlace").addEventListener("click", muestra); 
    }

    window.addEventListener("load",init);

 }
