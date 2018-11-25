/**
 * Partiendo de un documento html vacío, crea los elementos HTML de una calculadora
 * mediante los métodos del objeto predefinido document.
 * @author Mario Navarro Madrid
 */
{

  let calculadora = {
    num: 0,
    operador : "",
    banderaOperacion : false,
    botones : ["CE", "DEL", "%", "+", "7", "8", "9", "-", "4", "5", "6", "X", "1", "2", "3", "/", "0", "+/-", ",", "="],
    input : [],
    crearCalculadora(){
      let nombre = document.createElement("h1");
      nombre.textContent = "Calculadora - Mario Navarro Madrid";
      let main = document.createElement("main");
      let cuerpoCalculadora = document.createElement("div");
      cuerpoCalculadora.id = "cuerpoCalculadora";
      let input = document.createElement("input");
      input.value = 0;
      input.type = "text";
      input.id = "display";
      main.appendChild(nombre);
      main.appendChild(cuerpoCalculadora);
      cuerpoCalculadora.appendChild(input);
      document.body.appendChild(main);
      let contador = 0;
      for (let i = 0; i < 5; i++) {
        let fila = document.createElement("div");
        for (let j = 0; j < 4; j++) {
          let button = document.createElement("button");
          button.className = "botones";
          button.value = calculadora.botones[contador];
          button.textContent = calculadora.botones[contador++];
          button.addEventListener("click", calculadora.funcionalidad);
          fila.appendChild(button);
        }
        cuerpoCalculadora.appendChild(fila);
        calculadora.input = document.getElementById("display");
      }
    },

    funcionalidad: function() {
      if (!isNaN(parseInt(this.value))) {
        if(calculadora.input.value == "Infinity")
          calculadora.input.value = this.value;
        if (calculadora.banderaOperacion)
          calculadora.input.value = 0;
        if (calculadora.input.value == 0 && !calculadora.input.value.includes('.'))
          calculadora.input.value = parseFloat(this.value);
        else
          calculadora.input.value += parseFloat(this.value);
        calculadora.banderaOperacion = false;
        } else {
          if ( this.value == "+" || this.value == "-" || this.value == "/" || this.value == "X")
            calculadora.operar();
          calculadora.comprobarBoton(this.value);
          if(this.value != "+-" && this.value != "," && this.value != "CE" && this.value != "DEL")
            calculadora.banderaOperacion = true;
        }
      },

      comprobarBoton: function(value) {
        if(value=="+" || value=="-" || value=="X" || value=="/"){
          calculadora.num = parseFloat(calculadora.input.value);
        }
        switch (value) {
          case "+":
            calculadora.operador = "+";
            break;
          case "-":
            calculadora.operador = "-";
            break;
          case "X":
            calculadora.operador = "X";
            break;
          case "/":
            calculadora.operador = "/";
            break;
          case "DEL":
            calculadora.input.value = calculadora.input.value.substr(0, calculadora.input.value.length - 1);
            if (calculadora.input.value == "-" || calculadora.input.value.length == 0)
            calculadora.input.value = 0;
            break;
          case "CE":
            calculadora.input.value = 0;
            calculadora.operador ="";
            break;
          case "+/-":
            calculadora.input.value = parseFloat(calculadora.input.value)*-1;
            break;
          case ",":
            if (!calculadora.input.value.includes("."))
              calculadora.input.value += ".";
            break;
          case "%":
            calculadora.input.value = parseFloat(calculadora.input.value) / 100;
          case "=":
            calculadora.operar();
            break;
        }
      },

      operar: function() {
        if(calculadora.operador!=""){
          switch (calculadora.operador) {
            case "+":
              calculadora.input.value = parseFloat(calculadora.input.value) + calculadora.num;
              break;
            case "-":
              calculadora.input.value = calculadora.num - parseFloat(calculadora.input.value);
              break;
            case "X":
              calculadora.input.value = parseFloat(calculadora.input.value) * calculadora.num;
              break;
            case "/":
              calculadora.input.value = calculadora.num / parseFloat(calculadora.input.value);
              break;
          }
        }
        calculadora.operador = "";
      }
  }

  function init() {
    calculadora.crearCalculadora();
  }

  document.addEventListener("DOMContentLoaded", init);
}
