{




  function crearTablero() {
    $("#tablero").css("display", "none");
    let tablero = "<table>";
    for (let i = 0; i < juego.getFilas(); i++) {
      tablero += "<tr>";
      for (let j = 0; j < juego.getColumnas(); j++) {
        tablero += "<td class=casilla id=" + i + "_" + j + " x=" + i + " y=" + j + "></td>";
      }
      tablero += "</tr>";
    }
    tablero += "</table>";
    $("#tablero").html(tablero);
    $("#numBombas").text(juego.getMinas());
    $("#info").show("sine");
    $("#tablero").show("sine");

  }

  $(function () {

    $("#tablero").contextmenu(function (e) {
      e.preventDefault();
    });

    $("button").click(function (e) {
      e.preventDefault();
      $("#mensajePerdedor,#mensajeGanador").hide();
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
      $("#numBanderas").text(juego.getBanderas());
      $("td").mousedown(function (e) {
        e.preventDefault();
        let x = $(this).attr("x");
        let y = $(this).attr("y");
        switch (e.buttons) {
          case 1:
            if (!juego.hasBandera(x, y))
              picar(x, y);
            break;
          case 2:
            if (juego.getDerrota() || juego.getVictoria())
              return;
            if (juego.hasBandera(x, y))
              quitarBandera(x, y);
            else {
              ponerBandera(x, y);
            }
            $("#numBanderas").text(juego.getBanderas());
            break;
          case 3:
          case 4:
            juego.despejar(x, y);
            if (juego.getCasillasResaltadas().length !== 0)
              resaltarCasillas();
            else
              mostrarCasilla();
            break;
        }
      });
    });
  });

  function ponerBandera(x, y) {
    if (juego.ponerBandera(x, y))
      $("#" + x + "_" + y).addClass("bandera", 300, "linear");
  }

  function quitarBandera(x, y) {
    if (juego.quitarBandera(x, y))
      $("#" + x + "_" + y).removeClass("bandera", 300, "linear");

  }

  function picar(x, y) {
    if (juego.getDerrota() || juego.getVictoria()) return;
    juego.abrir(x, y);
    mostrarCasilla();
  }

  function checkVictoria() {
    if (juego.getDerrota()) {
      $("#mensajePerdedor").show("pulsate");
    } else if (juego.getVictoria()) {
      $("#mensajeGanador").show("scale");
    }
  }

  function resaltarCasillas() {
    let casilla, value;
    let casillas = juego.getCasillasResaltadas();
    let objetosCasillas = [];

    if(juego.getDerrota())
      return;

    casillas.forEach(element => {
      if (juego.getValueMapeado(element[0], element[1]) === 0)
        objetosCasillas.push($("#" + element[0] + "_" + element[1]))
    });

    objetosCasillas.forEach(element => {
      element.addClass("casillaResaltada", 500, "easeOutBounce");
    });

    $("td").on("mouseleave mouseup", function () {
      objetosCasillas.forEach(element => {
        element.removeClass("casillaResaltada", 400, "linear");
      });
      $(this).off("mouseleave mouseup");
    });


    juego.reiniciarCasillasResaltar();
  }

  function mostrarCasilla() {
    let casillas = juego.getCasillasPintar();
    let $casilla;


    for (let i = 0; i < casillas.length; i++) {
      setTimeout(function () {
        $("button").prop("disable");
        $casilla = $("#" + casillas[i][0] + "_" + casillas[i][1]);
        if (juego.getDerrota())
          $casilla.addClass("casillaBomba", 1000, "easeOutBounce");
        else{
          $casilla.addClass("casillaDestapada", 300, "easeOutBounce");
          $casilla.text(casillas[i][2]);
        }
      }, i * 30 + 100);
    }
    setTimeout(checkVictoria, 1000);
    $("button").prop("disabled", false);
    juego.reiniciarCasillasPintar();
  }

  /*function mostrarCasilla() {
    let casillas = juego.getCasillasPintar();
    let $casilla;
    for (let i = 0; i < casillas.length; i++) {
      setTimeout(function () {
        $casilla = $("#" + casillas[i][0] + "_" + casillas[i][1]);
        $casilla.fadeIn(i * 30 + 100, function () {
          if(juego.getDerrota()){
            $(this).addClass("casillaBomba",2000,"easeOutBounce");
            if (juego.hasBandera(casillas[i][0], casillas[i][1])) {
              quitarBandera(casillas[i][0], casillas[i][1]);
            }
          }
          else{
            $(this).addClass("casillaDestapada",300,"easeOutBounce");
            $(this).text(casillas[i][2]);
            $(this).removeClass("bandera",500,"easeInCirc");
          }
          //if (casillas[i][2] != 0 || casillas[i][2] != "X")
          checkVictoria();
      });
    }, i * 30 + 100);
  }
      juego.reiniciarCasillasPintar();
  }*/
  
}