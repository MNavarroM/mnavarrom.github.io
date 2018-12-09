{
  let canvas;

  function init() {
    canvas = Array.from(document.getElementsByTagName("canvas"));
    canvas.forEach(element => {
      element.addEventListener(element.getAttribute("id"), function(event) {
        paintColor(
          element,
          event.offsetX,
          event.offsetY,
          event.button,
          event.buttons
        );
      });
      paintColor(element);
    });
  }

  function paintColor(elemento, x, y, button, buttons) {
    if (elemento.getContext) {
      let contexto = elemento.getContext('2d');
      if (arguments.length == 1)
        contexto.fillStyle = "#00FF00";
      else
        contexto.fillStyle = getColor();

      contexto.fillRect(0, 0, 300, 300);
      contexto.fillStyle = "black";
      contexto.font= "normal 18px Arial";
      contexto.fillText(elemento.getAttribute("id"), 10, 30);
      if (arguments.length > 1) {
        contexto.fillText("x es igual a : " + x, 120, 30);
        contexto.fillText("y es igual a : " + y, 120, 60);
        contexto.fillText("button : " + button, 120, 90);
        contexto.fillText("buttons : " + buttons, 120, 120);
      }
    }
  }

  function cargarContexto(idCanvas) {
    let elemento = document.getElementById(idCanvas);
    if (elemento && elemento.getContext) {
      let contexto = elemento.getContext("2d");
      if (contexto) return contexto;
    }
    return false;
  }

  function getAleatorio(inferior, superior) {
    numPos = superior - inferior;
    aleatorio = Math.random() * numPos;
    aleatorio = Math.floor(aleatorio);
    return parseInt(inferior) + aleatorio;
  }

  function getColor() {
    return (
      "rgb(" +
      getAleatorio(0, 255) +
      "," +
      getAleatorio(0, 255) +
      "," +
      getAleatorio(0, 255) +
      ")"
    );
  }

  document.addEventListener("DOMContentLoaded", init);
}
