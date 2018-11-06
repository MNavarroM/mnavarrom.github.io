/**Mediante ejemplos, indica valores y utilidad de lastMatch en una expresión regular.
 * ¿Funciona en todos los navegadores?
 * @author Mario Navarro Madrid
 */
{
    
    function init() {
        expresion();
    }

    function expresion() {
        let expresion = /mario/gi;
        let cadena = "Hola, mi nombre es Mario";
        document.getElementById("info").innerHTML = `
            Para la expresion ${expresion} y la cadena "${cadena}" el resultado de expresion.test(cadena) es ${expresion.test(cadena)}
        `
        ;
    }

    document.addEventListener("DOMContentLoaded",init);
}