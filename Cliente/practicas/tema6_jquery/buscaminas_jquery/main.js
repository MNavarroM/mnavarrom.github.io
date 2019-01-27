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
                $(this).removeClass("casilla");
                juego.abrir(x,y);
                $(this).text(juego.getValue(x,y));
                $(this).addClass("casillaDestapada");

            });
        });
    });

}