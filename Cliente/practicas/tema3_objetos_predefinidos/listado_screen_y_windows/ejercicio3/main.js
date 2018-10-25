/** Crea una página web con el siguiente comportamiento:
 * Un botón "bajar línea" para bajar una línea.
 * Un botón "subir línea" para subir una línea
 *  Un botón "bajar" para bajar una página.
 * Un botón "subir" para subir una página.
 * Un botón "inicio" para ir al inicio del documento
 * Un botón "fin" para ir al final del documento.
 * Puedes utilizar los siguientes métodos de windows: scroll(), scrollBy(), scrollByLines(), scrollTo()
 * @author Mario Navarro Madrid
 */
{
    function init() {
        document.getElementById("bajarLinea").addEventListener("click", bajarLinea);
        document.getElementById("subirLinea").addEventListener("click", subirLinea);
        document.getElementById("subir").addEventListener("click", subir);
        document.getElementById("bajar").addEventListener("click", bajar);
        document.getElementById("inicio").addEventListener("click", inicio);
        document.getElementById("fin").addEventListener("click", fin);
    }

    function bajarLinea() {
        scroll(scrollX, scrollY + 15);
    }

    function subirLinea() {
        scroll(scrollX, scrollY - 15);
    }

    function bajar() {
        scroll(scrollX, scrollY + innerHeight);
    }

    function subir() {
        scroll(scrollX, scrollY - innerHeight);
    }

    function inicio() {
        scroll(scrollX, scrollY - document.body.clientHeight);
    }

    function fin() {
        scroll(scrollX, scrollY + document.body.clientHeight);
    }

    document.addEventListener("DOMContentLoaded", init);
}