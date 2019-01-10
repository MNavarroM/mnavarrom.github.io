/**
 * @author Mario Navarro Madrid
 */
{

  juego = (function () {
    return {
        iniciarJuego: (dificultad) => buscaminas.iniciarJuego(dificultad),
        abrir: (x, y) => buscaminas.abrir(x, y),
        ponerBandera: (x,y) => buscaminas.ponerBandera(x,y),
        quitarBandera: (x,y) => buscaminas.quitarBandera(x,y),
        mostrarTableroConsola :() => buscaminas.mostrarTableroConsola()
    };
})();

  let buscaminas = {
    columnas: 0,
    filas: 0,
    minas: 0,
    casillasRestantes: 0,
    tablero: [],
    mapeoCasillas: [],
    tableroVisible: [],
    finalPartida: false,
    partidaIniciada : false,
    contadorBanderas: 10,
    iniciarJuego(dificultad) {
      this.columnas = 0;
      this.filas = 0;
      this.minas = 0;
      this.partidaIniciada = true;
      try{
        buscaminas.elegirDificultad(dificultad);
      }catch(e){
        console.log(e.message);
        return;
      }
      buscaminas.crearTablero();
      buscaminas.generarMinas();
      buscaminas.mostrarTableroConsola();
      this.casillasRestantes = this.filas * this.columnas - this.minas;
      this.finalPartida = false;
    },
    elegirDificultad(dificultad) {
      switch (dificultad) {
        case 0:
          this.columnas = 8;
          this.filas = 8;
          this.minas = 10;
          break;
        case 1:
          this.columnas = 16;
          this.filas = 16;
          this.minas = 40;
          break;
        case 2:
          this.columnas = 16;
          this.filas = 30;
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
    generarMinas() {
      let fila;
      let columna;
      for (let i = 0; i < this.minas; i++) {
        do {
          fila = Math.floor(Math.random() * (this.filas - 1));
          columna = Math.floor(Math.random() * (this.columnas - 1));
        } while (this.tablero[fila][columna] == "X");
        this.tablero[fila][columna] = "X";
        for (
          let j = Math.max(fila - 1, 0);
          j <= Math.min(fila + 1, this.filas - 1);
          j++
        )
          for (
            let k = Math.max(columna - 1, 0);
            k <= Math.min(columna + 1, this.columnas - 1);
            k++
          )
            if (this.tablero[j][k] !== "X") this.tablero[j][k] += 1;
      }
    },
    mostrarTableroConsola() {
      console.log("Tablero minas");
      console.table(this.tablero);
      console.log("Tablero juego");
      console.table(this.tableroVisible);
    },
    abrir(x, y) {
      if (this.isFinal()) {
        console.log("Has perdido la partida, no puedes colocar minas");
        return;
      }
      if(!this.isEmpezada()){
        console.log("La partida no está iniciada");
        return;
      }
      if(x>this.filas || x<0 || y>this.filas || y<0){
        console.log("Fila o columna no válida");
        return;
      }
      let value = this.tablero[x][y];
      switch (value) {
        case "X":
          console.log("Has pulsado una mina, has perdido!");
          this.mostrarMinas();
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
      if(!this.finalPartida)
        this.mostrarInfo();
    },
    mostrarInfo(){
      //console.clear();
      this.mostrarTableroConsola();
      if (this.casillasRestantes == 0) {
        console.log("Enhorabuena, has ganado!");
        this.finalPartida = true;
      }
    },
    //x,y
    abrirCero(x, y) {
      if (this.mapeoCasillas[x][y] === 0) {
        this.mapeoCasillas[x][y] = -1;
        if (this.tablero[x][y] == 0)
          for (
            let j = Math.max(x - 1, 0);
            j <= Math.min(x + 1, this.filas - 1);
            j++
          )
            for (
              let k = Math.max(y - 1, 0);
              k <= Math.min(y + 1, this.columnas - 1);
              k++
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
          }
        }
      }
    },
    ponerBandera(x, y) {
      if(x>this.filas || x<this.filas || y>this.filas || y<this.filas){
        console.log("Fila o columna no válida");
        return;
      }
      if (this.isFinal()) {
        console.log("Has perdido la partida, no puedes colocar minas");
        return;
      }
      if(!this.isEmpezada()){
        console.log("La partida no está iniciada");
        return;
      }
      if (this.tableroVisible[x][y] === "O") {
        if (this.contadorBanderas == 0)
          console.log("Ya has colocado el máximo de banderas");
        else {
          this.tableroVisible[x][y] = "P";
          --this.contadorBanderas;
        }
      }
    },
    quitarBandera(x, y) {
      if(x>this.filas || x<this.filas || y>this.filas || y<this.filas){
        console.log("Fila o columna no válida");
        return;
      }
      if (this.isFinal()) {
        console.log("Has perdido la partida, no puedes quitar banderas");
        return;
      }
      if(!this.isEmpezada()){
        console.log("La partida no está iniciada");
        return;
      }
      if (this.contadorBanderas > 0) {
        if (this.tableroVisible[x][y] === "P") {
          this.tableroVisible[x][y] = "0";
          ++this.contadorBanderas;
        } else console.log("No existe ninguna bandera en esa posición");
      }
    },
    isFinal() {
      return this.finalPartida;
    },
    isEmpezada() {
      return this.partidaIniciada;
    }
  };

}
