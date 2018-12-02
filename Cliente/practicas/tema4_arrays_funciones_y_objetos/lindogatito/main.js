{

    function init() {
        document.getElementById("button").addEventListener("click",crearGato);
    }

    function crearGato() {
        let nombre = document.getElementById("nombre").value;
        let raza = document.getElementById("raza").value;
        let peso = document.getElementById("peso").value;
        let fechanacimiento = document.getElementById("fechanacimiento").value;
        try {
            creaVentanaGato(new Gato(nombre,peso,raza,fechanacimiento))
        } catch (error) {
            document.getElementById("error").innerHTML = error.message;
        }


    }

    function creaVentanaGato(gato) {
        let ventanaGato = window.open("","");
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
                    <img src="" alt="" id="imagen"></br>
                    <p id="estado"></p>
                </div>
            </body>
            </html>`
        );
        ventanaGato.document.close();        
    }


    document.addEventListener("DOMContentLoaded",init);

}