/**Indica la utilidad del operador in con los arrays. Demuestra su uso mediante un ejemplo
 * @author Mario Navarro Madrid
 */
{
    function init() {
        showInfo();
    }

    function showInfo() {
        let array = [1,2,3,"hola","adios","mario",6,90];
        document.getElementById("info").innerHTML = `
        ¿Contiene el array el elemento hola? ${("hola" in array)}. Es falso porque se debe especificar el índice, no el valor</br>
        ¿Contiene el array el índice 2? ${(2 in array)} </br>
        ¿Contiene el array la propiedad length? ${("length" in array)}. Es verdadero porque contiene esa propiedad </br>
        ¿Contiene el array la índice 80? ${(80 in array)} </br>
        `;
    }

    document.addEventListener("DOMContentLoaded",init);
}