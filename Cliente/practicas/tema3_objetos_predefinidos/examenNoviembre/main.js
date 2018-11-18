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
    }


    document.addEventListener("DOMContentLoaded",init);
}