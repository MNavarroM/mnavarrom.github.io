{
    function init() {
        document.getElementById("button").addEventListener("click",showDate);
    }

    function showDate() {
        fecha = new Date(document.getElementById("fecha").value);
        document.getElementById("info").innerHTML = "Fecha local: " + fecha.toString()+ "</br>";
        document.getElementById("info").innerHTML += "Fecha GTM: " + fecha.toGMTString();
    }

    document.addEventListener("DOMContentLoaded",init);
}