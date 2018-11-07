/**>Busca en el objeto String funciones que simulen la funcionalidad de test()
 * @author Mario Navarro Madrid
 */
{
    
    function init() {
        expresion();
    }

    function expresion() {
        let expresion = /([\d]{8})[-\ ]?([A-Z[^IÑOU])/gi;
        let cadena = "Estos son dos DNI imaginarios: 87569874S y 45887955R";
        let arrayExpresion = cadena.match(expresion);
        console.log(arrayExpresion);
        document.getElementById("info").innerHTML = `
            Para la expresion ${expresion} y la cadena "${cadena}" el resultado de expresion.exec(cadena) es un array que contiene las coincidencias</br>
            arrayExpresion[0] = ${arrayExpresion[0]}</br>
            arrayExpresion[1] = ${arrayExpresion[1]}</br>
        `
        ;
    }

    document.addEventListener("DOMContentLoaded",init);
}