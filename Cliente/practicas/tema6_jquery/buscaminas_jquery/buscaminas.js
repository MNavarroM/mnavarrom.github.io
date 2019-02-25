/**
 * @author Mario Navarro Madrid
 */
{
  juego = (function () {
    return {
      iniciarJuego: (dificultad) => buscaminas.iniciarJuego(dificultad),
      abrir: (x, y) => buscaminas.abrir(x, y),
      ponerBandera: (x, y) => buscaminas.ponerBandera(x, y),
      quitarBandera: (x, y) => buscaminas.quitarBandera(x, y),
      mostrar: () => buscaminas.mostrar(),
      getDificultad: () => buscaminas.getDificultad(),
      getFilas: () => buscaminas.getFilas(),
      getColumnas: () => buscaminas.getColumnas(),
      getValue: (x, y) => buscaminas.getValue(x, y),
      getValueMapeado: (x, y) => buscaminas.getValueMapeado(x, y),
      getCasillasPintar: () => buscaminas.getCasillasPintar(),
      getCasillasResaltadas: () => buscaminas.getCasillasResaltadas(),
      reiniciarCasillasPintar: () => buscaminas.reiniciarCasillasPintar(),
      reiniciarCasillasResaltar: () => buscaminas.reiniciarCasillasResaltar(),
      getDerrota: () => buscaminas.getDerrota(),
      getVictoria: () => buscaminas.getVictoria(),
      hasBandera: (x, y) => buscaminas.hasBandera(x, y),
      getBanderas: () => buscaminas.getBanderas(),
      getMinas: () => buscaminas.getMinas(),
      despejar: (x, y) => buscaminas.despejar(x, y)
    };
  })();

  let buscaminas = {
    dificultad: 0,
    columnas: 0,
    filas: 0,
    minas: 0,
    casillasRestantes: 0,
    tablero: [],
    mapeoCasillas: [],
    tableroVisible: [],
    finalPartida: false,
    partidaIniciada: false,
    derrota: false,
    contadorBanderas: 10,
    casillasPintar: [],
    casillasResaltar: [],
    iniciarJuego(dificultad) {
      this.dificultad = dificultad;
      this.columnas = 0;
      this.filas = 0;
      this.minas = 0;
      this.partidaIniciada = true;
      this.derrota = false;
      this.contadorBanderas = 10;
      try {
        buscaminas.elegirDificultad(dificultad);
      } catch (e) {
        console.log(e.message);
        return;
      }
      buscaminas.crearTablero();
      buscaminas.generarMinasNumeros();
      buscaminas.mostrar();
      this.casillasRestantes = (this.filas * this.columnas) - this.minas;
      this.finalPartida = false;
    },
    elegirDificultad(dificultad) {
      switch (dificultad) {
        case 0:
          this.columnas = 9;
          this.filas = 9;
          this.minas = 10;
          this.contadorBanderas = 10;
          break;
        case 1:
          this.columnas = 16;
          this.filas = 16;
          this.minas = 40;
          this.contadorBanderas = 40;
          break;
        case 2:
          this.columnas = 30;
          this.filas = 16;
          this.minas = 99;
          this.contadorBanderas = 99;
          break;
        default:
          throw new Error("Debes elegir 0, 1 o 2 de dificultad");
      }
    },
    crearTablero() {
      this.tablero = new Array(this.filas);
      for (let i = 0; i < this.filas; i++) {
        this.tablero[i] = [];
        this.mapeoCasillas[i] = [];
        this.tableroVisible[i] = [];
        for (let j = 0; j < this.columnas; j++) {
          this.tablero[i][j] = 0;
          this.mapeoCasillas[i][j] = 0;
          this.tableroVisible[i][j] = "O";
        }
      }
    },
    generarMinasNumeros() {
      let fila;
      let columna;
      for (let i = 0; i < this.minas; i++) {
        do {
          fila = Math.floor(Math.random() * (this.filas - 1));
          columna = Math.floor(Math.random() * (this.columnas - 1));
        } while (this.tablero[fila][columna] == "X");
        this.tablero[fila][columna] = "X";
        for (
          let j = Math.max(fila - 1, 0); j <= Math.min(fila + 1, this.filas - 1); j++
        )
          for (
            let k = Math.max(columna - 1, 0); k <= Math.min(columna + 1, this.columnas - 1); k++
          )
            if (this.tablero[j][k] !== "X") this.tablero[j][k] += 1;
      }
    },
    mostrar() {
      console.log("Tablero minas");
      console.table(this.tablero);
      //console.log("Tablero juego");
      //console.table(this.tableroVisible);
      console.log("Tablero mapeo");
      console.table(this.mapeoCasillas);
      console.log("Utilice juego. en consola para ver los métodos disponibles.");
    },
    abrir(x, y) {
      if (this.isFinal()) {
        console.log("Has perdido la partida, no puedes colocar minas");
        return;
      }
      if (!this.isEmpezada()) {
        console.log("La partida no está iniciada");
        return;
      }
      if(this.mapeoCasillas[x][y] !== 0)
        return;
      if (x > this.filas - 1 || x < 0 || y > this.columnas - 1 || y < 0) {
        console.log("Fila o columna no válida");
        return;
      }

      let value = this.tablero[x][y];
      switch (value) {
        case 0:
          if (this.mapeoCasillas[x][y] != -1) {
            //this.tableroVisible[x][y] = 0;
            this.casillasRestantes--;
            this.abrirCero(x, y);
          }
          break;
        case "X":
          this.mostrarMinas();
          this.derrota = true;
          this.finalPartida = true;
          break;
        default:
          if (this.mapeoCasillas[x][y] != -1) {
            this.mapeoCasillas[x][y] = value;
            this.tableroVisible[x][y] = value;
            this.casillasRestantes--;
          }
          break;
      }
      this.casillasPintar.unshift([x, y, this.getValue(x, y)]);
      if (buscaminas.casillasRestantes == 0) {
        buscaminas.partidaFinalizada = true;
        return "¡Has ganado!";
      }
      if (this.derrota) console.log("Has pulsado una mina, has perdido!");
    },
    despejar(fila, columna) {
      let x = parseInt(fila);
      let y = parseInt(columna);
      this.casillasResaltar = [];
      let numBanderas = this.calcularNumeroBanderas(x, y, this.filas - 1, this.columnas - 1);
      if (numBanderas === this.tablero[x][y] && this.tablero[x][y] !== 0) {
        this.casillasResaltar = [];
        if (x != 0) {
          if (this.mapeoCasillas[x - 1][y] === 0) this.abrir(x - 1, y);
        }
        if (x != this.filas - 1) {
          if (this.mapeoCasillas[x + 1][y] === 0) this.abrir(x + 1, y);
        }
        if (y != this.columnas - 1) {
          if (this.mapeoCasillas[x][y + 1] === 0) this.abrir(x, y + 1);
        }
        if (y != 0) {
          if (this.mapeoCasillas[x][y - 1] === 0) this.abrir(x, y - 1);
        }
        if (y !== 0 && x !== this.filas - 1) {
          if (this.mapeoCasillas[x + 1][y - 1] === 0) this.abrir(x + 1, y - 1);
        }
        if (x != 0 && y != 0) {
          if (this.mapeoCasillas[x - 1][y - 1] === 0) this.abrir(x - 1, y - 1);
        }
        if (x != this.filas - 1 && y != this.columnas - 1) {
          if (this.mapeoCasillas[x + 1][y + 1] === 0) this.abrir(x + 1, y + 1);
        }
        if (x != 0 && y != this.columnas - 1) {
          if (this.mapeoCasillas[x - 1][y + 1] === 0) this.abrir(x - 1, y + 1);
        }
      }
    },
    calcularNumeroBanderas(fila, columna, filas, columnas) {
      let numBanderas = 0;
      if (fila != 0) {
        if (this.mapeoCasillas[fila - 1][columna] === "P") numBanderas++;
        else this.casillasResaltar.push([fila - 1, columna]);
      }
      if (fila != filas) {
        if (this.mapeoCasillas[fila + 1][columna] === "P") numBanderas++;
        else this.casillasResaltar.push([fila + 1, columna]);
      }
      if (columna != columnas) {
        if (this.mapeoCasillas[fila][columna + 1] === "P") numBanderas++;
        else this.casillasResaltar.push([fila, columna + 1]);
      }
      if (columna != 0) {
        if (this.mapeoCasillas[fila][columna - 1] === "P") numBanderas++;
        else this.casillasResaltar.push([fila, columna - 1]);
      }
      if (columna !== 0 && fila !== filas) {
        if (this.mapeoCasillas[fila + 1][columna - 1] === "P") numBanderas++;
        else this.casillasResaltar.push([fila + 1, columna - 1]);
      }
      if (fila != 0 && columna != 0) {
        if (this.mapeoCasillas[fila - 1][columna - 1] === "P") numBanderas++;
        else this.casillasResaltar.push([fila - 1, columna - 1]);
      }
      if (fila != filas && columna != columnas) {
        if (this.mapeoCasillas[fila + 1][columna + 1] === "P") numBanderas++;
        else this.casillasResaltar.push([fila + 1, columna + 1]);
      }
      if (fila != 0 && columna != columnas) {
        if (this.mapeoCasillas[fila - 1][columna + 1] === "P") numBanderas++;
        else this.casillasResaltar.push([fila - 1, columna + 1]);
      }
      return numBanderas;
    },
    //x,y
    abrirCero(x, y) {
      if (this.mapeoCasillas[x][y] === 0) {
        this.mapeoCasillas[x][y] = -1;
        if (this.tablero[x][y] == 0) {
          for (let j = Math.max(x - 1, 0); j <= Math.min(x + 1, this.filas - 1); j++) {
            for (let k = Math.max(y - 1, 0); k <= Math.min(y + 1, this.columnas - 1); k++) {
              if (this.tablero[j][k] != "X") {
                this.abrir(j, k);
              }
            }
          }
        }
      }
    },
    mostrarMinas() {
      this.casillasPintar = [];
      for (let i = 0; i < this.filas; i++) {
        for (let j = 0; j < this.columnas; j++) {
          if (this.tablero[i][j] == "X") {
            this.tablero[i][j] = "X";
            this.tableroVisible[i][j] = "X";
            this.casillasPintar.push([i, j, this.getValue(i, j)]);
          }
        }
      }
      this.partidaFinalizada = true;
      this.derrota = true;
    },
    ponerBandera(x, y) {
      if (x >= this.filas || x < 0 || y >= this.columnas || y < 0) {
        console.log("Fila o columna no válida");
        return;
      }
      if (this.isFinal()) {
        console.log("Has perdido la partida, no puedes colocar minas");
        return;
      }
      if (!this.isEmpezada()) {
        console.log("La partida no está iniciada");
        return;
      }
      if (this.contadorBanderas > 0) {
        if (this.mapeoCasillas[x][y] === 0) {
          this.mapeoCasillas[x][y] = "P";
          --this.contadorBanderas;
          return true;
        } else {
          return false;
        }
      } else console.log("Ya has colocado el máximo de banderas");
    },
    quitarBandera(x, y) {
      if (x >= this.filas || x < 0 || y >= this.columnas || y < 0) {
        console.log("Fila o columna no válida");
        return;
      }
      if (this.isFinal()) {
        console.log("Has perdido la partida, no puedes quitar banderas");
        return;
      }
      if (!this.isEmpezada()) {
        console.log("La partida no está iniciada");
        return;
      }
      if (this.mapeoCasillas[x][y] === "P") {
        this.mapeoCasillas[x][y] = 0;
        ++this.contadorBanderas;
        return true;
      } else {
        console.log("No existe ninguna bandera en esa posición");
        return false;
      }
    },
    isFinal() {
      return this.finalPartida;
    },
    isEmpezada() {
      return this.partidaIniciada;
    },
    getDificultad() {
      return this.dificultad;
    },
    getFilas() {
      return this.filas;
    },
    getColumnas() {
      return this.columnas;
    },
    getValue(x, y) {
      let value = this.tablero[x][y];
      if (value == 0) return "";
      return value;
    },
    getValueMapeado(x, y) {
      let value = this.mapeoCasillas[x][y];
      return value;
    },
    getCasillasPintar() {
      return this.casillasPintar;
    },
    getCasillasResaltadas() {
      return this.casillasResaltar;
    },
    reiniciarCasillasPintar() {
      this.casillasPintar = [];
    },
    reiniciarCasillasResaltar() {
      this.casillasResaltar = [];
    },
    getDerrota() {
      return this.derrota;
    },
    getVictoria() {
      return this.casillasRestantes == 0;
    },
    hasBandera(x, y) {
      return this.mapeoCasillas[x][y] === "P";
    },
    getBanderas() {
      //console.log(this.contadorBanderas);
      return this.contadorBanderas;
    },
    getMinas() {
      return this.minas;
    }
  };
}