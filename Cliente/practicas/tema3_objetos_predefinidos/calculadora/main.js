/**
 * Partiendo de un documento html vacío, crea los elementos HTML de una calculadora
 * mediante los métodos del objeto predefinido document.
 * @author Mario Navarro Madrid
 */
{
    function init() {
        createCalculadora();
    }

    function createCalculadora() {
        let nombre = document.createElement("h1");
        nombre.textContent = "Calculadora - Mario Navarro Madrid";
        main = document.createElement("main");
        document.body.appendChild(main);
        main.appendChild(nombre);
        main.style.textAlign = "center";
        cuerpoCalculadora = document.createElement("div");
        cuerpoCalculadora.style.backgroundColor  = "grey";
        cuerpoCalculadora.style.width ="240px";
        cuerpoCalculadora.style.margin ="0px auto";
        input = document.createElement("input");
        input.type = "text";
        input.style.width = "236px";
        input.style.height = "30px";
        main.appendChild(cuerpoCalculadora);
        cuerpoCalculadora.appendChild(input);
        let botones = ["CE","<-","%","+","7","8","9","-","4",
        "5","6","X","1","2","3","/","0" ,"+/-",",","="];
        let contador = 0;
        for (let i = 0; i < 5; i++) {
            let fila = document.createElement("div");
            for (let j = 0; j < 4; j++) {
                let button = document.createElement("button");
                button.style.width = "60px";
                button.style.height = "50px";
                button.textContent =botones[contador++];
                fila.appendChild(button);
            }
            cuerpoCalculadora.appendChild(fila);
        }
    }

    window.addEventListener("load",init);
}


