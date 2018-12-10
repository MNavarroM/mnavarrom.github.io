{

    let nombres = ["Rodolfo", "Eusebio","Federico", "Romualdo", "Alarico", "Misifu", "Garfield"];
    let razas = ["Persa", "Siamés", "Maine Coon", "Scottish Fold","Gato Pardo","Gato gooordo"];
    let fechas = ["2015-05-21", "2010-01-21", "2012-03-11", "2012-02-22", "2007-07-17", "2016-04-12"];

    function init() {
        let error = document.getElementById("error");
        let button = document.getElementById("button");
        button.addEventListener("click", creaVentanaGato);
    }

    function creaVentanaGato() {
        let num = document.getElementById("numGatos").value;
        for (let i = 0; i < num; i++) {
            gato = new Gato(nombres[getAleatorio(0, nombres.length)], getAleatorio(1, 16), razas[getAleatorio(0, razas.length)], fechas[getAleatorio(0, fechas.length)])
            let ventanaGato = window.open("", "");
            ventanaGato.gato = gato;
            ventanaGato.document.write(
                `<!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <meta http-equiv="X-UA-Compatible" content="ie=edge">
                    <script src="Gato.js"></script>
                    <script src="comportamientoGato.js"></script>
                    <title>${gato.nombre}</title>
                </head>
                <body>
                    <div id="datosgato">
                        <p<b>${gato.nombre}</b></p>
                        <p>Peso: <span id="peso">${gato.peso}</span></p>
                        <p>Raza: ${gato.raza}</p>
                        <p>Fecha de nacimiento: ${gato.fechanacimiento}</p>
                        <p>Edad: ${gato.calcularEdad()}</p> 
                        <p><button id="jugar">Jugar</button><button id="comer">Comer</button><button id="dormir">Dormir</button><button id="garrotillo">Darle garrotillo</button></p>
                        <img src="" alt="" id="imagen" height="250px" width="250px"></br>
                        <p id="estado"></p>
                    </div>
                </body>
                </html>`
            );
            ventanaGato.document.close();
        }
    }

    function getAleatorio(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    document.addEventListener("DOMContentLoaded", init);

}