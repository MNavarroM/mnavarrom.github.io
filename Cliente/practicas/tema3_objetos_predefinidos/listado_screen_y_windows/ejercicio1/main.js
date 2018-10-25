/**Muestra en  una lista la siguiente información. Cada uno de las etiquetas <ol> y <li>
 *  han de crearse mediante los métodos de document.
 * Explica en cada uno la diferencia con respecto a los demás. 
 * window.outerHeight
 * window.innerHeight
 * window.screen.availHeight
 * window.screen.height
 *  window.document.clientHeight
 * @author Mario Navarro Madrid
 */
{
    function init() {
        showInfo();
    }

    function showInfo() {
        info = document.getElementById("info");
        info.innerHTML = "<li>window.outerHeight : " + window.outerHeight + " - Representa la altura de la ventana del navegador, incluyendo barras de marcadores, buscador,etc...</li>";
        info.innerHTML += "<li>window.innerHeight : " + window.innerHeight + " - Representa la altura del contenido del navador, no de su ventana.</li>";
        info.innerHTML += "<li>window.screen.availHeight : " + window.screen.availHeight + " - Representa la altura disponible de la pantalla</li>";
        info.innerHTML += "<li>window.screen.height : " + window.screen.height + " - Representa la altura total de la pantalla</li>";
        info.innerHTML += "<li>window.document.clientHeight : " + window.document.clientHeight + " - Representa la altura incluyendo el padding, pero no los borders, la barra de scrolls o los márgenes</li>";
    }

    document.addEventListener("DOMContentLoaded",init);
}