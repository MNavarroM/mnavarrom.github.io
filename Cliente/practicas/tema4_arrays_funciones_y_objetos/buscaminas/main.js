{

    function init() {
        document.getElementById("facil").addEventListener("click",function () {
            borrarTablero();
            buscaminas.iniciarJuego(8,8,10);
        });
        document.getElementById("medio").addEventListener("click",function () {
            borrarTablero();
            buscaminas.iniciarJuego(16,16,40);
        });
        document.getElementById("dificil").addEventListener("click",function () {
            borrarTablero();
            buscaminas.iniciarJuego(16,30,99);
        });
    }

    function borrarTablero() {
        let tablero = document.getElementById("tableroJuego");
        if(tablero)
            document.getElementById("tablero").removeChild(tablero);
        document.getElementById("mensaje").innerHTML = "";
    }

    document.addEventListener("DOMContentLoaded",init);

}