/**
 * @author Mario Navarro Madrid
 */
{

    function init() {
        document.getElementById("a1").addEventListener("click",function (event) {
            event.preventDefault();
            window.open("ejercicio1.html","_self");
        });
        document.getElementById("a2").addEventListener("click",function (event) {
            event.preventDefault();
            window.open("ejercicio2.html","_self");
        });
        document.getElementById("a3").addEventListener("click",function (event) {
            event.preventDefault();
            window.open("ejercicio3.html","_self");
        });
        document.getElementById("a4").addEventListener("click",function (event) {
            event.preventDefault();
            window.open("ejercicio4.html","_self");
        });
        document.getElementById("a5").addEventListener("click",function (event) {
            event.preventDefault();
            window.open("ejercicio5.html","_self");
        });
    }


    document.addEventListener("DOMContentLoaded",init);
}