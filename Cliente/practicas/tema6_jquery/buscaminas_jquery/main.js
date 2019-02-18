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

  $(function () {
    $("#tablero").contextmenu(function (e) {
      e.preventDefault();
    });

    $("button").click(function (e) {
      e.preventDefault();
      $("#info").css("display", "block");
      $("#mensaje").hide();
      $("#mensaje span").text("");
      switch ($(this).attr("id")) {
        case "facil":
          juego.iniciarJuego(0);6
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
            if (juego.getCasillasResaltadas().length !== 0) {
              resaltarCasillas();
            } else {
              mostrarCasilla();
              checkVictoria();
            }
            break;
        }
      });
    });
  });

  function ponerBandera(x, y) {
    if (juego.ponerBandera(x, y)) $("#" + x + "_" + y).fadeIn(1500,function () {
        $(this).addClass("bandera");
      })
  }

  function quitarBandera(x, y) {
    if (juego.quitarBandera(x, y)) $("#" + x + "_" + y).fadeIn(1500,function () {
        $(this).removeClass("bandera");
      })
  }

  function picar(x, y) {
    if (juego.getDerrota() || juego.getVictoria()) return;
    juego.abrir(x, y);
    mostrarCasilla();
    checkVictoria();
  }

  function checkVictoria() {
    if (juego.getDerrota()){
      $("#mensaje span").text("Has perdido!");
      $("#mensaje").fadeIn(1200);
      $("#mensaje").css("display", "block");
    } 
    if (juego.getVictoria()){
      $("#mensaje span").text("Has ganado!");
      $("#mensaje").fadeIn(1200);
      $("#mensaje").css("display", "block");
    } 
  }

  function resaltarCasillas() {
    let casilla, value;
    let casillas = juego.getCasillasResaltadas();
    let objetosCasillas = [];

    casillas.forEach(element => {
      if (juego.getValueMapeado(element[0], element[1]) === 0)
        objetosCasillas.push($("#" + element[0] + "_" + element[1]))
    });

    objetosCasillas.forEach(element => {
      element.addClass("casillaResaltada",400,"swing");

    });

    $("td").on("mouseleave mouseup", function () {
      objetosCasillas.forEach(element => {
        element.removeClass("casillaResaltada",100,"easeInBounce");
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
        $casilla = $("#" + casillas[i][0] + "_" + casillas[i][1]);
        $casilla.fadeIn(i * 30 + 100, function () {
          if(juego.getDerrota())
            $(this).addClass("casillaBomba",3000,"easeOutBounce");
          else
            $(this).addClass("casillaDestapada",300,"easeInBounce");
          if (casillas[i][2] != 0 || casillas[i][2] != "X")
            $(this).text(casillas[i][2]);
            if (juego.hasBandera(casillas[i][0], casillas[i][1])) {
              quitarBandera(casillas[i][0], casillas[i][1]);
              $("#numBanderas").text(juego.getBanderas());
            }
        });
      }, i * 30 + 100);
    }
    juego.reiniciarCasillasPintar();
  }
}