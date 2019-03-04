/**
 * @author Mario Navarro Madrid
 */

  // juego = (function () {
  //   return {
  //     iniciarJuego: (dificultad) => iniciarJuego(dificultad),
  //     abrir: (x, y) => buscaminas.abrir(x, y),
  //     ponerBandera: (x, y) => buscaminas.ponerBandera(x, y),
  //     quitarBandera: (x, y) => buscaminas.quitarBandera(x, y),
  //     mostrar: () => buscaminas.mostrar(),
  //     getDificultad: () => buscaminas.getDificultad(),
  //     getFilas: () => buscaminas.getFilas(),
  //     getColumnas: () => buscaminas.getColumnas(),
  //     getValue: (x, y) => buscaminas.getValue(x, y),
  //     getValueMapeado: (x, y) => buscaminas.getValueMapeado(x, y),
  //     getCasillasPintar: () => buscaminas.getCasillasPintar(),
  //     getCasillasResaltadas: () => buscaminas.getCasillasResaltadas(),
  //     reiniciarCasillasPintar: () => buscaminas.reiniciarCasillasPintar(),
  //     reiniciarCasillasResaltar: () => buscaminas.reiniciarCasillasResaltar(),
  //     getDerrota: () => buscaminas.getDerrota(),
  //     getVictoria: () => buscaminas.getVictoria(),
  //     hasBandera: (x, y) => buscaminas.hasBandera(x, y),
  //     getBanderas: () => buscaminas.getBanderas(),
  //     getMinas: () => buscaminas.getMinas(),
  //     despejar: (x, y) => buscaminas.despejar(x, y)
  //   };
  // })();

  let buscaminas = (function(){
    let dificultad = 0,
    columnas = 0,
    filas = 0,
    minas = 0,
    casillasRestantes = 0,
    tablero = [],
    mapeoCasillas = [],
    tableroVisible = [],
    finalPartida = false,
    partidaIniciada = false,
    derrota = false,
    contadorBanderas = 10,
    casillasPintar = [],
    casillasResaltar = []
    function iniciarJuego(dificultad) {
      partidaIniciada = true;
      derrota = false;
      contadorBanderas = 10;
      try {
        elegirDificultad(dificultad);
      } catch (e) {
        console.log(e.message);
        return;
      }
      crearTablero();
      generarMinasNumeros();
      mostrar();
      casillasRestantes = (filas * columnas) - minas;
      finalPartida = false;
    }
    function elegirDificultad(dificultad) {
      switch (dificultad) {
        case 0:
          columnas = 9;
          filas = 9;
          minas = 10;
          contadorBanderas = 10;
          break;
        case 1:
          columnas = 16;
          filas = 16;
          minas = 40;
          contadorBanderas = 40;
          break;
        case 2:
          columnas = 30;
          filas = 16;
          minas = 99;
          contadorBanderas = 99;
          break;
        default:
          throw new Error("Debes elegir 0, 1 o 2 de dificultad");
      }
    }
    function crearTablero() {
      tablero = new Array(filas);
      for (let i = 0; i < filas; i++) {
        tablero[i] = [];
        mapeoCasillas[i] = [];
        tableroVisible[i] = [];
        for (let j = 0; j < columnas; j++) {
          tablero[i][j] = 0;
          mapeoCasillas[i][j] = 0;
          tableroVisible[i][j] = "O";
        }
      }
    }
    function generarMinasNumeros() {
      let fila;
      let columna;
      for (let i = 0; i < minas; i++) {
        do {
          fila = Math.floor(Math.random() * (filas - 1));
          columna = Math.floor(Math.random() * (columnas - 1));
        } while (tablero[fila][columna] == "X");
        tablero[fila][columna] = "X";
        for (
          let j = Math.max(fila - 1, 0); j <= Math.min(fila + 1, filas - 1); j++
        )
          for (
            let k = Math.max(columna - 1, 0); k <= Math.min(columna + 1, columnas - 1); k++
          )
            if (tablero[j][k] !== "X") tablero[j][k] += 1;
      }
    }
    function mostrar() {
      console.log("Tablero minas");
      console.table(tablero);
      //console.log("Tablero juego");
      //console.table(tableroVisible);
      console.log("Tablero mapeo");
      console.table(mapeoCasillas);
      console.log("Utilice bucasminas. en consola para ver los métodos disponibles.");
    }
    function abrir(x, y) {
      if (isFinal()) {
        console.log("Has perdido la partida, no puedes colocar minas");
        return;
      }
      if (!isEmpezada()) {
        console.log("La partida no está iniciada");
        return;
      }
      if(mapeoCasillas[x][y] !== 0)
        return;
      if (x > filas - 1 || x < 0 || y > columnas - 1 || y < 0) {
        console.log("Fila o columna no válida");
        return;
      }

      let value = tablero[x][y];
      switch (value) {
        case 0:
          if (mapeoCasillas[x][y] != -1) {
            //tableroVisible[x][y] = 0;
            casillasRestantes--;
            abrirCero(x, y);
          }
          break;
        case "X":
          mostrarMinas();
          derrota = true;
          finalPartida = true;
          break;
        default:
          if (mapeoCasillas[x][y] != -1) {
            mapeoCasillas[x][y] = value;
            tableroVisible[x][y] = value;
            casillasRestantes--;
          }
          break;
      }
      casillasPintar.unshift([x, y, getValue(x, y)]);
      if (casillasRestantes == 0) {
        partidaFinalizada = true;
        return "¡Has ganado!";
      }
      if (derrota) console.log("Has pulsado una mina, has perdido!");
    }
    function despejar(fila, columna) {
      let x = parseInt(fila);
      let y = parseInt(columna);
      casillasResaltar = [];
      let numBanderas = calcularNumeroBanderas(x, y, filas - 1, columnas - 1);
      if (numBanderas === tablero[x][y] && tablero[x][y] !== 0) {
        casillasResaltar = [];
        if (x != 0) {
          if (mapeoCasillas[x - 1][y] === 0) abrir(x - 1, y);
        }
        if (x != filas - 1) {
          if (mapeoCasillas[x + 1][y] === 0) abrir(x + 1, y);
        }
        if (y != columnas - 1) {
          if (mapeoCasillas[x][y + 1] === 0) abrir(x, y + 1);
        }
        if (y != 0) {
          if (mapeoCasillas[x][y - 1] === 0) abrir(x, y - 1);
        }
        if (y !== 0 && x !== filas - 1) {
          if (mapeoCasillas[x + 1][y - 1] === 0) abrir(x + 1, y - 1);
        }
        if (x != 0 && y != 0) {
          if (mapeoCasillas[x - 1][y - 1] === 0) abrir(x - 1, y - 1);
        }
        if (x != filas - 1 && y != columnas - 1) {
          if (mapeoCasillas[x + 1][y + 1] === 0) abrir(x + 1, y + 1);
        }
        if (x != 0 && y != columnas - 1) {
          if (mapeoCasillas[x - 1][y + 1] === 0) abrir(x - 1, y + 1);
        }
      }
    }
    function calcularNumeroBanderas(fila, columna, filas, columnas) {
      let numBanderas = 0;
      if (fila != 0) {
        if (mapeoCasillas[fila - 1][columna] === "P") numBanderas++;
        else casillasResaltar.push([fila - 1, columna]);
      }
      if (fila != filas) {
        if (mapeoCasillas[fila + 1][columna] === "P") numBanderas++;
        else casillasResaltar.push([fila + 1, columna]);
      }
      if (columna != columnas) {
        if (mapeoCasillas[fila][columna + 1] === "P") numBanderas++;
        else casillasResaltar.push([fila, columna + 1]);
      }
      if (columna != 0) {
        if (mapeoCasillas[fila][columna - 1] === "P") numBanderas++;
        else casillasResaltar.push([fila, columna - 1]);
      }
      if (columna !== 0 && fila !== filas) {
        if (mapeoCasillas[fila + 1][columna - 1] === "P") numBanderas++;
        else casillasResaltar.push([fila + 1, columna - 1]);
      }
      if (fila != 0 && columna != 0) {
        if (mapeoCasillas[fila - 1][columna - 1] === "P") numBanderas++;
        else casillasResaltar.push([fila - 1, columna - 1]);
      }
      if (fila != filas && columna != columnas) {
        if (mapeoCasillas[fila + 1][columna + 1] === "P") numBanderas++;
        else casillasResaltar.push([fila + 1, columna + 1]);
      }
      if (fila != 0 && columna != columnas) {
        if (mapeoCasillas[fila - 1][columna + 1] === "P") numBanderas++;
        else casillasResaltar.push([fila - 1, columna + 1]);
      }
      return numBanderas;
    }
    //x,y
    function abrirCero(x, y) {
      if (mapeoCasillas[x][y] === 0) {
        mapeoCasillas[x][y] = -1;
        if (tablero[x][y] == 0) {
          for (let j = Math.max(x - 1, 0); j <= Math.min(x + 1, filas - 1); j++) {
            for (let k = Math.max(y - 1, 0); k <= Math.min(y + 1, columnas - 1); k++) {
              if (tablero[j][k] != "X") {
                abrir(j, k);
              }
            }
          }
        }
      }
    }
    function mostrarMinas() {
      casillasPintar = [];
      for (let i = 0; i < filas; i++) {
        for (let j = 0; j < columnas; j++) {
          if (tablero[i][j] == "X") {
            tablero[i][j] = "X";
            tableroVisible[i][j] = "X";
            casillasPintar.push([i, j, getValue(i, j)]);
          }
        }
      }
      partidaFinalizada = true;
      derrota = true;
    }
    function ponerBandera(x, y) {
      if (x >= filas || x < 0 || y >= columnas || y < 0) {
        console.log("Fila o columna no válida");
        return;
      }
      if (isFinal()) {
        console.log("Has perdido la partida, no puedes colocar minas");
        return;
      }
      if (!isEmpezada()) {
        console.log("La partida no está iniciada");
        return;
      }
      if (contadorBanderas > 0) {
        if (mapeoCasillas[x][y] === 0) {
          mapeoCasillas[x][y] = "P";
          --contadorBanderas;
          return true;
        } else {
          return false;
        }
      } else console.log("Ya has colocado el máximo de banderas");
    }
    function quitarBandera(x, y) {
      if (x >= filas || x < 0 || y >= columnas || y < 0) {
        console.log("Fila o columna no válida");
        return;
      }
      if (isFinal()) {
        console.log("Has perdido la partida, no puedes quitar banderas");
        return;
      }
      if (!isEmpezada()) {
        console.log("La partida no está iniciada");
        return;
      }
      if (mapeoCasillas[x][y] === "P") {
        mapeoCasillas[x][y] = 0;
        ++contadorBanderas;
        return true;
      } else {
        console.log("No existe ninguna bandera en esa posición");
        return false;
      }
    }
    function isFinal() {
      return finalPartida;
    }
    function isEmpezada() {
      return partidaIniciada;
    }
    function getFilas() {
      return filas;
    }
    function getColumnas() {
      return columnas;
    }
    function getValue(x, y) {
      let value = tablero[x][y];
      if (value == 0) return "";
      return value;
    }
    function getValueMapeado(x, y) {
      let value = mapeoCasillas[x][y];
      return value;
    }
    function reiniciarCasillasPintar(){
      casillasPintar = [];
    }
    function getCasillasPintar() {
      return casillasPintar;
    }
    function getCasillasResaltadas() {
      return casillasResaltar;
    }
    function getDerrota() {
      return derrota;
    }
    function getVictoria() {
      return casillasRestantes == 0;
    }
    function hasBandera(x, y) {
      return mapeoCasillas[x][y] === "P";
    }
    function getBanderas() {
      //console.log(contadorBanderas);
      return contadorBanderas;
    }
    function getMinas() {
      return minas;
    }
    return {
      iniciarJuego: iniciarJuego,
      abrir: abrir,
      ponerBandera: ponerBandera,
      quitarBandera: quitarBandera,
      getFilas: getFilas,
      getColumnas: getColumnas,
      reiniciarCasillasPintar : reiniciarCasillasPintar,
      getValueMapeado: getValueMapeado,
      getCasillasPintar: getCasillasPintar,
      getCasillasResaltadas: getCasillasResaltadas,
      getDerrota: getDerrota,
      getVictoria: getVictoria,
      hasBandera : hasBandera,
      getBanderas : getBanderas,
      getMinas : getMinas,
      despejar : despejar
    }
  })();
