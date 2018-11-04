/** Crea  una función que devuelva un array con cada uno de los argumentos.
 * @author Mario Navarro Madrid
 */
{
    function init() {
        createArray(1,2,3,"hola","adios","mario",6,2,"pepito");
    }

    function createArray() {
        let array = [];
        for (let i = 0; i < arguments.length; i++) {
            array.push(arguments[i])
        }
        document.getElementById("info").innerHTML = array;
    }

    document.addEventListener("DOMContentLoaded",init);
}