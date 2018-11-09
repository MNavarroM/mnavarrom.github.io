/**
 * Partiendo de un documento html vacío, crea los elementos HTML de una calculadora
 * mediante los métodos del objeto predefinido document.
 * @author Mario Navarro Madrid
 */
{
  let num;
  let operador = "";
  let banderaOperacion = false;

  function init() {
    createCalculadora();
    let btns = Array.from(document.getElementsByClassName("botones"));
    input = document.getElementById("display");
    btns.forEach(element => {
      element.addEventListener("click", funcionalidad);
    });
  }

  function createCalculadora() {
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
    let botones = [
      "CE",
      "DEL",
      "%",
      "+",
      "7",
      "8",
      "9",
      "-",
      "4",
      "5",
      "6",
      "X",
      "1",
      "2",
      "3",
      "/",
      "0",
      "+/-",
      ",",
      "="
    ];
    let contador = 0;
    for (let i = 0; i < 5; i++) {
      let fila = document.createElement("div");
      for (let j = 0; j < 4; j++) {
        let button = document.createElement("button");
        button.className = "botones";
        button.value = botones[contador];
        button.textContent = botones[contador++];
        fila.appendChild(button);
      }
      cuerpoCalculadora.appendChild(fila);
    }
  }

  function funcionalidad() {
  if (!isNaN(parseInt(this.value))) {
    if(input.value == "Infinity")
      input.value = this.value;
    if (banderaOperacion)
      input.value = 0;
    if (input.value == 0 && !input.value.includes('.'))
      input.value = parseFloat(this.value);
    else
      input.value += parseFloat(this.value);
    banderaOperacion = false;
    } else {
      if ( this.value == "+" || this.value == "-" || this.value == "/" || this.value == "X")
        operar();
      comprobarBoton(this.value);
      if(this.value != "+-" && this.value != "," && this.value != "CE" && this.value != "DEL")
        banderaOperacion = true;
    }
  }

  function comprobarBoton(value) {
    if(value=="+" || value=="-" || value=="X" || value=="/"){
      num = parseFloat(input.value);
    }
    switch (value) {
      case "+":
        operador = "+";
        break;
      case "-":
        operador = "-";
        break;
      case "X":
        operador = "X";
        break;
      case "/":
        operador = "/";
        break;
      case "DEL":
        input.value = input.value.substr(0, input.value.length - 1);
        if (input.value == "-" || input.value.length == 0)
        input.value = 0;
        break;
      case "CE":
        input.value = 0;
        operador ="";
        break;
      case "+/-":
        input.value = parseFloat(input.value)*-1;
        break;
      case ",":
        if (!input.value.includes("."))
          input.value += ".";
        break;
      case "%":
        input.value = parseFloat(input.value) / 100;
      case "=":
        operar();
        break;
    }
  }

  function operar() {
    if(operador!=""){
      switch (operador) {
        case "+":
          input.value = parseFloat(input.value) + num;
          break;
        case "-":
          input.value = num - parseFloat(input.value);
          break;
        case "X":
          input.value = parseFloat(input.value) * num;
          break;
        case "/":
          input.value = num / parseFloat(input.value);
          break;
      }
    }
  }

  window.addEventListener("load", init);
}
