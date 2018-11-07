/**>Busca en el objeto String funciones que simulen la funcionalidad de test()
 * @author Mario Navarro Madrid
 */
{

    function init() {
        expresion();
    }

    function expresion() {
        let cadena = "Estos son dos DNI imaginarios: 87569874S y 45887955R";
        document.getElementById("info").innerHTML = `
            La funcionalidad includes() del objeto String es similar al método test() de RegExp, aunque no se le pasa una expresión regular por si encuentra coincidencia, sino una cadena</br>
            ¿Contiene la cadena: "${cadena}" el DNI: "87569874S"?: ${cadena.includes("87569874S")}
        `;
    }

    document.addEventListener("DOMContentLoaded",init);
}