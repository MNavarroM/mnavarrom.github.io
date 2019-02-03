{
  function crearTablero() {
    let tablero = "<table>";
    for (let i = 0; i < juego.getFilas(); i++) {
      tablero += "<tr>";
      for (let j = 0; j < juego.getColumnas(); j++) {
        tablero +=
          "<td class=casilla id=" +
          i +
          "_" +
          j +
          " x=" +
          i +
          " y=" +
          j +
          "></td>";
      }
      tablero += "</tr>";
    }
    tablero += "</table>";
    $("#tablero").html(tablero);
    $("td").addClass("casilla");
    $("#numBombas").text(juego.getMinas());
  }

  $(function() {

    $("#tablero").contextmenu(function (e) {
      e.preventDefault();
    });

    $("button").click(function(e) {
      e.preventDefault();
      $("#info").css("display", "block");
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
      $("td").mousedown(function(e) {
        e.preventDefault();
        switch (e.buttons) {
          case 1:
            if(!juego.hasBandera($(this).attr("x"), $(this).attr("y")))
              picar($(this).attr("x"), $(this).attr("y"));
            break;
          case 2:
            if(juego.hasBandera($(this).attr("x"), $(this).attr("y")))
              quitarBandera($(this).attr("x"), $(this).attr("y"));
            else{
              ponerBandera($(this).attr("x"), $(this).attr("y"));
            }
            $("#numBanderas").text(juego.getBanderas());
            break;
        }
      });
    });
  });

  function ponerBandera(x,y){
    if(juego.ponerBandera(x,y))
      $("#"+x+"_"+y).addClass("bandera");
  }

  function quitarBandera(x,y){
    if(juego.quitarBandera(x,y))
      $("#"+x+"_"+y).removeClass("bandera");
  }

  function picar(x, y) {
    if (juego.getDerrota() || juego.getVictoria()) return;
    juego.abrir(x, y);
    mostrarCasilla();
    checkVictoria();
  }

  function checkVictoria() {
    if (juego.getDerrota()) $("#mensaje").text("Has perdido!");
    if (juego.getVictoria()) $("#mensaje").text("Has ganado!");
  }

  function mostrarCasilla() {
    let casillas = juego.getCasillasPintar();
    let casilla;
    for (let i = 0; i < casillas.length; i++) {
      setTimeout(function() {
        casilla = $("#" + casillas[i][0] + "_" + casillas[i][1]);
        casilla.fadeIn(150, function() {
          if (juego.getDerrota()) $(this).addClass("casillaBomba");
          else $(this).addClass("casillaDestapada");
          if (casillas[i][2] != 0 || casillas[i][2] != "X"){
            $(this).text(casillas[i][2]);
            if(juego.hasBandera(casillas[i][0],casillas[i][1]))
              quitarBandera(casillas[i][0],casillas[i][1])  ;
          }
        });
      }, i * 9);
    }
    juego.reiniciarCasillasPintar();
  }
}
