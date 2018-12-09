/**
 * @author Mario Navarro Madrid
 */


buscaminas = {
  columnas: 0,
  filas: 0,
  minas: 0,
  casillasRestantes: 0,
  tablero: [],
  mapeoCasillas: [],
  finalPartida: false,
  contadorBanderas: 10,
  iniciarJuego(columnas,filas,minas) {
    this.columnas = columnas;
    this.filas = filas;
    this.minas = minas;
    buscaminas.crearTablero();
    buscaminas.generarMinas();
    buscaminas.mostrarTableroConsola();
    buscaminas.crearTableroGrafico();
    this.casillasRestantes = this.filas * this.columnas - this.minas;
    this.finalPartida = false;
  },
  crearTablero() {
    this.tablero = new Array(this.filas);
    for (let i = 0; i < this.filas; i++) {
      this.tablero[i] = [];
      this.mapeoCasillas[i] = [];
      for (let j = 0; j < this.columnas; j++) {
        this.tablero[i][j] = 0;
        this.mapeoCasillas[i][j] = 0;
      }
    }
  },
  crearTableroGrafico() {
    window.oncontextmenu = function () {
      return false;
    }
    let tabla = document.createElement("table");
    let row, cell;
    tabla.setAttribute("id", "tableroJuego");
    for (let i = 0; i < this.filas; i++) {
      row = document.createElement("tr");
      for (let j = 0; j < this.columnas; j++) {
        cell = document.createElement("td");
        cell.setAttribute("id", i + "_" + j);
        cell.setAttribute("bandera", false);
        cell.style.border = "1px solid black";
        cell.style.backgroundColor = "grey";
        cell.height = "30px";
        cell.width = "30px";
        cell.style.textAlign = "center";
        //cell.style.color = "blue";
        //cell.innerHTML = this.tablero[i][j];
        //Por cada elemento creado, añado un comportamiento.
        cell.addEventListener("mousedown", function (event) {
          event.preventDefault();
          if (event.button == 0)
            buscaminas.open(this.id);
          if (event.button == 2)
            buscaminas.ponerBandera(this.id);
        });
        row.appendChild(cell);
      }
      tabla.appendChild(row);
    }
    document.getElementById("tablero").appendChild(tabla);
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
        let j = Math.max(fila - 1, 0); j <= Math.min(fila + 1, this.filas - 1); j++
      )
        for (
          let k = Math.max(columna - 1, 0); k <= Math.min(columna + 1, this.columnas - 1); k++
        )
          if (this.tablero[j][k] !== "X") this.tablero[j][k] += 1;
    }
  },
  mostrarTableroConsola() {
    console.table(this.tablero);
    console.table(this.mapeoCasillas);
  },
  open(idCasilla) {
    if (this.finalPartida) return;
    let [fila, columna] = idCasilla.split("_");
    let casilla = document.getElementById(idCasilla);
    let value = this.tablero[fila][columna];
    if (casilla.bandera)
      return;
    casilla.disabled = true;
    switch (value) {
      case "X":
        document.getElementById("mensaje").innerHTML = "Pulsaste una mina, has perdido!";
        this.mostrarMinas();
        this.finalPartida = true;
        break;
      case 0:
        if (this.mapeoCasillas[fila][columna] != -1) {
          this.casillasRestantes--;
          casilla.style.backgroundColor = "white";
          this.abrirCero(idCasilla);
        }
        break;
      default:
        if (this.mapeoCasillas[fila][columna] != -1) {
          casilla.innerHTML = value;
          this.mapeoCasillas[fila][columna] = -1;
          this.casillasRestantes--;
        }
        break;
    }
    if (this.casillasRestantes == 0) {
      document.getElementById("mensaje").innerHTML = "Enhorabuena, has ganado!";
      this.finalPartida = true;
    }
  },
  //x,y
  abrirCero(idCasilla) {
    let [fila, columna] = idCasilla.split("_");
    if (this.mapeoCasillas[fila][columna] === 0) {
      this.mapeoCasillas[fila][columna] = -1;
      if (this.tablero[fila][columna] == 0)
        for (let j = Math.max(fila - 1, 0); j <= Math.min(fila + 1, this.filas - 1); j++)
          for (let k = Math.max(columna - 1, 0); k <= Math.min(columna + 1, this.columnas - 1); k++) {
            if (this.tablero[j][k] != "X")
              this.open(j + "_" + k);
          }
    }
  },
  mostrarMinas() {
    let casilla;
    for (let i = 0; i < this.filas; i++) {
      for (let j = 0; j < this.columnas; j++) {
        if (this.tablero[i][j] == "X") {
          casilla = document.getElementById(i + "_" + j);
          casilla.innerHTML = "X";
        }
      }
    }
  },
  ponerBandera(id) {    
    let casilla = document.getElementById(id);
    let [fila, columna] = id.split("_");
    if (!casilla.bandera) {
      if (this.contadorBanderas == 0)
        return;
      if(this.mapeoCasillas[fila][columna]==-1)
        return;
      casilla.style.backgroundColor = "red";
      casilla.bandera = true;
      --this.contadorBanderas;
    } else {
      casilla.style.backgroundColor = "grey";
      casilla.bandera = false;
      ++this.contadorBanderas;
    }
  },
  quitarBandera(x, y) {
    if (this.contadorBanderas != 0) {
      this.tablero[x][y] = "P";
      --this.contadorBanderas;
    }
  }
};


function init() {

}

document.addEventListener("DOMContentLoaded", init);