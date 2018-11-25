/**
 * @author Mario Navarro Madrid
 */
{

    function init() {
        document.getElementById("atras").addEventListener("click",function(event) {
            event.preventDefault();
            window.history.back();
        });
        document.getElementById("button").addEventListener("click",exponer);
    }

    function exponer() {
        let numero = document.getElementById("numero").value;
        let info = document.getElementById("info");
        for (let i = 1; i <= 10; i++) {
            info.innerHTML += numero + " * " + i + " = " + Math.pow(numero, i) + "</br>";
        }
    }

    document.addEventListener("DOMContentLoaded",init);

}