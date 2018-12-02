{


    function init() {
        document.getElementById("facil").addEventListener("click",function () {
            borrarTablero();
            buscaminas.iniciarJuego();
        })
    }

    function borrarTablero() {
        let tablero = document.getElementById("tableroJuego");
        if(tablero)
            document.getElementById("tablero").removeChild(tablero);
        document.getElementById("mensaje").innerHTML = "";
    }

    document.addEventListener("DOMContentLoaded",init);

}