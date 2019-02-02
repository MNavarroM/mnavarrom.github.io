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
      mostrarTableroConsola: () => buscaminas.mostrarTableroConsola(),
      getDificultad: () => buscaminas.getDificultad(),
      getFilas: () => buscaminas.getFilas(),
      getColumnas: () => buscaminas.getColumnas(),
      getValue: (x, y) => buscaminas.getValue(x, y),
      getCasillasPintar: () => buscaminas.getCasillasPintar(),
      reiniciarCasillasPintar: () => buscaminas.reiniciarCasillasPintar(),
      getDerrota: () => buscaminas.getDerrota(),
      getVictoria: () => buscaminas.getVictoria(),
      hasBandera: (x, y) => buscaminas.hasBandera(x, y),
      getBanderas: () => buscaminas.getBanderas(),
      getMinas: () => buscaminas.getMinas()

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
    iniciarJuego(dificultad) {
      this.dificultad = dificultad;
      this.columnas = 0;
      this.filas = 0;
      this.minas = 0;
      this.partidaIniciada = true;
      this.derrota = false;
      try {
        buscaminas.elegirDificultad(dificultad);
      } catch (e) {
        console.log(e.message);
        return;
      }
      buscaminas.crearTablero();
      buscaminas.generarMinasNumeros();
      buscaminas.mostrarTableroConsola();
      this.casillasRestantes = this.filas * this.columnas - this.minas;
      this.finalPartida = false;
    },
    elegirDificultad(dificultad) {
      switch (dificultad) {
        case 0:
          this.columnas = 9;
          this.filas = 9;
          this.minas = 10;
          break;
        case 1:
          this.columnas = 16;
          this.filas = 16;
          this.minas = 40;
          break;
        case 2:
          this.columnas = 30;
          this.filas = 16;
          this.minas = 99;
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
    mostrarTableroConsola() {
      console.log("Tablero minas");
      console.table(this.tablero);
      console.log("Tablero juego");
      console.table(this.tableroVisible);
      console.log("Tablero mapeo");
      console.table(this.mapeoCasillas);
    },
    abrir(x, y) {
      if (this.isFinal()) {
        console.log("Has perdido la partida, no puedes colocar minas");
        return "Has perdido la partida, no puedes colocar minas";
      }
      if (!this.isEmpezada()) {
        console.log("La partida no está iniciada");
        return;
      }
      if (x > this.filas || x < 0 || y > this.columnas || y < 0) {
        console.log("Fila o columna no válida");
        return "Fila o columna no válida";
      }
      let value = this.tablero[x][y];
      switch (value) {
        case "X":
          this.mostrarMinas();
          this.derrota = true;
          this.finalPartida = true;
          break;
        case 0:
          if (this.mapeoCasillas[x][y] != -1) {
            this.casillasRestantes--;
            this.tableroVisible[x][y] = 0;
            this.abrirCero(x, y);
          }
          break;
        default:
          if (this.mapeoCasillas[x][y] != -1) {
            this.mapeoCasillas[x][y] = -1;
            this.tableroVisible[x][y] = this.tablero[x][y];
            this.casillasRestantes--;
          }
          break;
      }
      console.clear();
      this.mostrarTableroConsola();
      this.casillasPintar.unshift([x, y, this.getValue(x, y)]);
      if (buscaminas.casillasPorDescubrir == 0) {
        buscaminas.partidaFinalizada = true;
        return "¡Enhorabuena, has ganado!";
      }
      if (this.derrota)
        console.log("Has pulsado una mina, has perdido!");
    },
    //x,y
    abrirCero(x, y) {
      if (this.mapeoCasillas[x][y] === 0) {
        this.mapeoCasillas[x][y] = -1;
        if (this.tablero[x][y] == 0)
          for (
            let j = Math.max(x - 1, 0); j <= Math.min(x + 1, this.filas - 1); j++
          )
            for (
              let k = Math.max(y - 1, 0); k <= Math.min(y + 1, this.columnas - 1); k++
            ) {
              if (this.tablero[j][k] != "X") this.abrir(j, k);
            }
      }
    },
    mostrarMinas() {
      for (let i = 0; i < this.filas; i++) {
        for (let j = 0; j < this.columnas; j++) {
          if (this.tablero[i][j] == "X") {
            this.tablero[i][j] = "X";
            this.tableroVisible[i][j] = "X";
            this.casillasPintar.push([i, j, this.getValue(i, j)]);
          }
        }
      }
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
      } else
        console.log("Ya has colocado el máximo de banderas");
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
        return false
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
      if (value == 0)
        return "";
      return this.tablero[x][y];
    },
    getCasillasPintar() {
      return this.casillasPintar;
    },
    reiniciarCasillasPintar() {
      this.casillasPintar = []
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
      console.log(this.contadorBanderas);
      return this.contadorBanderas;
    },
    getMinas(){
      return this.minas;
    }
  };

}