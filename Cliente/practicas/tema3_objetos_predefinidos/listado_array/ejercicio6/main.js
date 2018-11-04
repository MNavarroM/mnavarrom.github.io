/**Crea  una función que devuelva un array con cada uno de los argumentos.
 * En caso de que alguno de sus argumentos sea un array, que introduzca sus elementos uno a uno.
 * @author Mario Navarro Madrid
 */
{
    function init() {
        createArray(1,2,["mario","navarro","madrid"],"hola","adios",[3,"córdoba",6.2],2,"pepito");
    }

    function createArray() {
        let array = [];
        for (let i = 0; i < arguments.length; i++) {
            if(Array.isArray(arguments[i]))
                arguments[i].forEach(function (element) {
                    array.push(element);
                });
            else
                array.push(arguments[i]);
        }
        document.getElementById("info").innerHTML = array;
    }

    document.addEventListener("DOMContentLoaded",init);
}