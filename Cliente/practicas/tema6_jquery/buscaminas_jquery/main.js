{
    function crearTablero() {
        let tablero = "<table>";
        for (let i = 0; i < juego.getFilas(); i++) {
            tablero += "<tr>"
            for (let j = 0; j < juego.getColumnas(); j++) {
                tablero += ("<td class=casilla id=" + i + "_" + j + " x=" + i + " y=" + j +"></td>");
            }
            tablero += ("</tr>");
        }
        tablero += "</table>"
        $("#tablero").html(tablero);
        $("td").addClass("casilla");

    }

    $(function () {
        $("button").click(function (e) {
            e.preventDefault();
            $("#mensaje").text(""); 
            switch ($(this).attr("id")) {
                case "facil":
                    juego.iniciarJuego(0);
                    break;
                case "normal":
                    juego.iniciarJuego(1);
                    break;
                case "dificil":
                    juego.iniciarJuego(2);
                    break;
            }
            crearTablero();
            $("td").click(function (e) {
                let x = $(this).attr("x");
                let y = $(this).attr("y");
                //$(this).removeClass("casilla");
                juego.abrir(x,y);
                mostrarCasilla();
                if(juego.getDerrota())
                    $("#mensaje").text("Has perdido!");
                if(juego.getVictoria())
                    $("#mensaje").text("Has ganado!");
                //$(this).text(juego.getValue(x,y));
                //$(this).addClass("casillaDestapada");

            });
        });
    });

    function mostrarCasilla(){
        let casillas = juego.getCasillasPintar();
        let casilla;
        for (let i = 0; i < casillas.length; i++) {
            setTimeout(function () {
                casilla = $("#" + casillas[i][0] + "_" + casillas[i][1]);
                casilla.fadeIn(150,function () {
                   $(this).addClass("casillaDestapada");
                   if(casillas[i][2] !=0 || casillas[i][2] !="X")
                    $(this).text(casillas[i][2]);
                });
            },i*10);
        }
        juego.reiniciarCasillasPintar();
    }

}