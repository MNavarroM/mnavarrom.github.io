/**
 * Crea el método incrementaDias() que incremente/decremente los días indicados. Admitirá como primer argumento
 * un entero positivo/negativo que reperesente el número de días. El resto de argumentos representarán una fecha,
 * similar a los argumentos del constructor Date().
 * @author Mario Navarro Madrid
 */
{
    function init() {
        document.getElementById("button").addEventListener("click",incrementaDias);
    }

    function incrementaDias() {
        let dias = document.getElementById("dias").value;
        let date =  document.getElementById("fecha").value;
        let info = document.getElementById("info");
        let fecha = new Date(date);
        info.innerHTML = "Fecha original " + fecha.toString();
        fecha.setDate(fecha.getDate() + parseInt(dias));
        info.innerHTML += "</br> Fecha tras añadir " + dias + " días : " + fecha.toString();
    }

    document.addEventListener("DOMContentLoaded",init);
}