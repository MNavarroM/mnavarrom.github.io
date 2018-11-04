/** Indica la utilidad del operador in con los arrays. Demuestra su uso mediante un ejemplo.
 * @author Mario Navarro Madrid
 */

{
    function init() {
        showInfo();
        showArray();
    }

    function showInfo() {
        let info = document.getElementById("info");
        info.innerHTML = `
        Argumentos de foreach:
        <ul>
            <li>currentValue: El elemento actual del array que se está procesando</li>
            <li>index: Índice actual del array que se está procesando</li>
            <li>array: Array en el que el foreach está siendo aplicado</li>
        </ul>
        `;
    }

    function showArray() {
        let array = [1,2,3,"hola","adios",undefined,4,"mario"];
        array.forEach(function (value,index,array) {
            document.getElementById("infoArray").innerHTML += "Valor: " + value +" - Indice: " + index + " - Array :" + array +"</br>";
        });
    }

    document.addEventListener("DOMContentLoaded",init);
}