{

  $(function () {
    iniciarPartida();
  });

    function iniciarPartida(){
      $("#tablero").contextmenu(function (e) {
        e.preventDefault();
      });
      $("button").mousedown(function (e) {
        e.preventDefault();
        $("#mensajePerdedor,#mensajeGanador").hide();
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
        $("#botonera").html("<a href=index.html><button>Jugar de nuevo</button></a>");
        $("#numBanderas").text(buscaminas.getBanderas());
        $("td").mousedown(function (e) {
          e.preventDefault();
          let x = $(this).attr("x");
          let y = $(this).attr("y");
          switch (e.buttons) {
            case 1:
              if (!buscaminas.hasBandera(x, y))
                picar(x, y);
              break;
            case 2:
              if (buscaminas.getDerrota() || buscaminas.getVictoria())
                return;
              if (buscaminas.hasBandera(x, y))
                quitarBandera(x, y);
              else {
                ponerBandera(x, y);
              }
              $("#numBanderas").text(buscaminas.getBanderas());
              break;
            case 3:
            case 4:
              buscaminas.despejar(x, y);
              if (buscaminas.getCasillasResaltadas().length !== 0)
                resaltarCasillas();
              else
                mostrarCasilla();
              break;
          }
        });
      });
    }

    function crearTablero() {
    $("#tablero").css("display", "none");
    let tablero = "<table>";
    for (let i = 0; i < buscaminas.getFilas(); i++) {
      tablero += "<tr>";
      for (let j = 0; j < buscaminas.getColumnas(); j++) {
        tablero += "<td class=casilla id=" + i + "_" + j + " x=" + i + " y=" + j + "></td>";
      }
      tablero += "</tr>";
    }
    tablero += "</table>";
    $("#tablero").html(tablero);
    $("#numBombas").text(buscaminas.getMinas());
    $("#info").show("sine");
    $("#tablero").show("sine");

  }

  function ponerBandera(x, y) {
    if (buscaminas.ponerBandera(x, y))
      $("#" + x + "_" + y).addClass("bandera", 300, "linear");
  }

  function quitarBandera(x, y) {
    if (buscaminas.quitarBandera(x, y))
      $("#" + x + "_" + y).removeClass("bandera", 300, "linear");

  }

  function picar(x, y) {
    if (buscaminas.getDerrota() || buscaminas.getVictoria()) return;
    buscaminas.abrir(x, y);
    mostrarCasilla();
  }

  function checkVictoria() {
    if (buscaminas.getDerrota()) {
      $("#mensajePerdedor").show("pulsate");
    } else if (buscaminas.getVictoria()) {
      $("#mensajeGanador").show("scale");
    }
  }

  function resaltarCasillas() {
    let casilla, value;
    let casillas = buscaminas.getCasillasResaltadas();
    let objetosCasillas = [];

    if(buscaminas.getDerrota())
      return;

    $.each(casillas, function (indexInArray, valueOfElement) { 
      if (buscaminas.getValueMapeado(valueOfElement[0], valueOfElement[1]) === 0)
        objetosCasillas.push($("#" + valueOfElement[0] + "_" + valueOfElement[1]))
    });

    // casillas.forEach(element => {
    //   if (buscaminas.getValueMapeado(element[0], element[1]) === 0)
    //     objetosCasillas.push($("#" + element[0] + "_" + element[1]))
    // });

    $.each(objetosCasillas, function (indexInArray, valueOfElement) { 
      valueOfElement.addClass("casillaResaltada", 500, "easeOutBounce");
    });

    // objetosCasillas.forEach(element => {
    //   element.addClass("casillaResaltada", 500, "easeOutBounce");
    // });

    $("td").on("mouseleave mouseup", function () {
      $.each(objetosCasillas, function (indexInArray, valueOfElement) { 
        valueOfElement.removeClass("casillaResaltada", 400, "linear");
      });
      // objetosCasillas.forEach(element => {
      //   element.removeClass("casillaResaltada", 400, "linear");
      // });
      $(this).off("mouseleave mouseup");
    });
    
  }

  function mostrarCasilla() {
    let casillas = buscaminas.getCasillasPintar();
    let $casilla;
    for (let i = 0; i < casillas.length; i++) {
      setTimeout(function () {
        $casilla = $("#" + casillas[i][0] + "_" + casillas[i][1]);
        if (buscaminas.getDerrota())
          $casilla.addClass("casillaBomba", 1000, "easeOutBounce");
        else{
          $casilla.addClass("casillaDestapada", 300, "easeOutBounce");
          $casilla.text(casillas[i][2]);
        }
      }, i * 30 + 100);
    }
    buscaminas.reiniciarCasillasPintar();
    checkVictoria();
  }
}