{
  function elegirDificultad() {}

  function isFinished() {
    if (buscaminas.getDerrota() || buscaminas.getVictoria()) return;
  }

  $(function() {
    let $numBanderas = $("#numBanderas");
    let $tablero = $("#tablero");
    $tablero.contextmenu(function(e) {
      e.preventDefault();
    });
    $("button").mousedown(function(e) {
      e.preventDefault();
      switch ($(this).attr("id")) {
        case "facil":
          buscaminas.iniciarJuego(0);
          break;
        case "normal":
          buscaminas.iniciarJuego(1);
          break;
        case "dificil":
          buscaminas.iniciarJuego(2);
          break;
      }
      crearTablero();
      $("#botonera").html(
        "<a href=index.html><button>Jugar de nuevo</button></a>"
      );
      $numBanderas.text(buscaminas.getBanderas());
      $("td").mousedown(function(e) {
        e.preventDefault();
        let x = $(this).attr("x");
        let y = $(this).attr("y");
        isFinished();
        switch (e.buttons) {
          
          case 1:
            if (!buscaminas.hasBandera(x, y)) picar(x, y);
            break;
          case 2:
            if (buscaminas.hasBandera(x, y)) quitarBandera(x, y);
            else {
              ponerBandera(x, y);
            }
            $numBanderas.text(buscaminas.getBanderas());
            break;
          case 3:
          case 4:
          console.log(e.buttons);
            buscaminas.despejar(x, y);
            if (buscaminas.getCasillasResaltadas().length !== 0)
              resaltarCasillas();
            else mostrarCasilla();
            break;
        }
      });
    });
  });

  function crearTablero() {
    let $tablero = $("#tablero");
    $tablero.css("display", "none");
    let tablero = "<table>";
    for (let i = 0; i < buscaminas.getFilas(); i++) {
      tablero += "<tr>";
      for (let j = 0; j < buscaminas.getColumnas(); j++) {
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
    $tablero.html(tablero);
    $("#numBombas").text(buscaminas.getMinas());
    $("#info").show("sine");
    $tablero.show("sine");
  }

  function ponerBandera(x, y) {
    try {
      if (buscaminas.ponerBandera(x, y))
        $("#" + x + "_" + y).addClass("bandera", 300, "linear");
    } catch (error) {
      if(error.message !="")
        console.log(error.message);
    }
  }

  function quitarBandera(x, y) {
    try {
      if (buscaminas.quitarBandera(x, y))
        $("#" + x + "_" + y).removeClass("bandera", 300, "linear");
    } catch (error) {
      if(error.message !="")
        console.log(error.message);
    }
  }

  function picar(x, y) {
    isFinished();
    try {
      buscaminas.abrir(x, y);  
      mostrarCasilla();
    } catch (error) {
      if(error.message !="")
        console.log(error.message);
    }
  }

  function checkVictoria() {
    if (buscaminas.getDerrota()) {
      $("#mensajePerdedor").show("pulsate");
    } else if (buscaminas.getVictoria()) {
      $("#mensajeGanador").toggle("scale");
    }
  }

  function resaltarCasillas() {
    let casillas = buscaminas.getCasillasResaltadas();
    let objetosCasillas = [];

    if (buscaminas.getDerrota()) return;

    $.each(casillas, function(indexInArray, valueOfElement) {
      let $casilla = $("#" + valueOfElement[0] + "_" + valueOfElement[1]);
      if (buscaminas.getValueMapeado(valueOfElement[0], valueOfElement[1]) === 0)
        objetosCasillas.push($casilla);
    });

    $(objetosCasillas).addClass("casillaResaltada", 500, "easeOutBounce", function () {
      $(this).removeClass("casillaResaltada", 400, "linear");
    });
  }

  function mostrarCasilla() {
    let casillas = buscaminas.getCasillasPintar();
    let $casilla;
    for (let i = 0; i < casillas.length; i++) {
      setTimeout(function() {
        $casilla = $("#" + casillas[i][0] + "_" + casillas[i][1]);
        if (buscaminas.getDerrota())
          $casilla.addClass("casillaBomba", 1000, "easeOutBounce");
        else {
          $casilla.addClass("casillaDestapada", 300, "easeOutBounce");
          $casilla.text(casillas[i][2]);
        }
      }, i * 30 + 100);
    }
    buscaminas.reiniciarCasillasPintar();
    checkVictoria();
  }
}
