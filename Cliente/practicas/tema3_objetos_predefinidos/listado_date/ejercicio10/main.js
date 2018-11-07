/**Implementa el método calcularHastaFinDeAnno() que devuelva los días que quedan hasta fin de año
 * @author Mario Navarro Madrid
 */
{
    function init() {
        document.getElementById("button").addEventListener("click",calcularHastaFinDeAnno);
    }

    function calcularHastaFinDeAnno() {
        let diffDias = new Date(new Date().getFullYear(),11,31).getTime() - new Date().getTime();
        document.getElementById("info").innerHTML = "Quedan " + Math.round(diffDias/(1000*60*60*24)) + " días hasta fin de año";
    }

    document.addEventListener("DOMContentLoaded",init);
}