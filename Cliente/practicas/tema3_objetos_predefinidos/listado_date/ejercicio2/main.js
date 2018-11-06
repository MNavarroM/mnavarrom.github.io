/**Indica la utilidad de Date.now();
 * @author Mario Navarro Madrid
 */
{

    function init() {
        document.getElementById("info").innerHTML = `
        El método Date.now() devuelve la fecha actual en milisegundos</br>
        Date.now() = ${Date.now()}
        `
    }

    document.addEventListener("DOMContentLoaded",init);
}