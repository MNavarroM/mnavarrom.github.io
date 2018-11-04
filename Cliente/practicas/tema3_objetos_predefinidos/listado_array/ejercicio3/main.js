/** Indica la función que comprueba si un objeto es o no un Array.
 * Demuestra su uso mediante un ejemplo.
 * @author Mario Navarro Madrid
 */

{
    function init() {
        showInfo();
    }

    function showInfo() {
        let array = [1,2,3];
        let string = "hola";
        let boolean = false;
        let int = 96;
        document.getElementById("info").innerHTML = `
            <ul>
                <li>array = ${array}</li>
                <li>string = ${string}</li>
                <li>boolean = ${boolean}</li>
                <li>int = ${int}</li>
            </ul>
            ¿Es array un array?${Array.isArray(array)}</br>
            ¿Es string un array?${Array.isArray(string)}</br>
            ¿Es boolean un array?${Array.isArray(boolean)}</br>
            ¿Es int un array?${Array.isArray(int)}</br>
        `
    }

    document.addEventListener("DOMContentLoaded",init);
}