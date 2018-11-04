/**Crea una función que elimine todos los undefined de un array.
 * @author Mario Navarro Madrid
 */
{

        function init() {
            createArray();
        }

        function createArray() {
            let array = [1,2,undefined,4,5,7,undefined,"mario", undefined];
            document.getElementById("info").innerHTML = "Array antes de eliminar undefined " + array;
            let arrayFilter = array.filter(value => value!=undefined);
            document.getElementById("info").innerHTML += "</br>Array tras eliminar undefined " + arrayFilter;

        }

        document.addEventListener("DOMContentLoaded",init);
}