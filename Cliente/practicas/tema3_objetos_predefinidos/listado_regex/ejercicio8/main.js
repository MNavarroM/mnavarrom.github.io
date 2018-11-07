/**Mediante ejemplos, indica valores y utilidad de lastMatch en una expresión regular.
 * ¿Funciona en todos los navegadores?
 * @author Mario Navarro Madrid
 */
{

    function init() {
        expresion();
    }

    function expresion() {
        let expresion = /^([\d]{8})[-\ ]?([A-Z[^IÑOU])$/gi;
        let cadena = "87569874S";
        let arrayExpresion = expresion.exec(cadena);
        console.log(arrayExpresion);
        document.getElementById("info").innerHTML = `
            Para la expresion ${expresion} y la cadena "${cadena}" el resultado de expresion.exec(cadena) es un array que contiene dos elementos, uno por cada grupo</br>
            arrayExpresion[0] = ${arrayExpresion[1]}</br>
            arrayExpresion[1] = ${arrayExpresion[2]}</br>
        `
        ;
    }

    document.addEventListener("DOMContentLoaded",init);
}