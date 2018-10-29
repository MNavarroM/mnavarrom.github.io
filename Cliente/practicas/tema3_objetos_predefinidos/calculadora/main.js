/**
 * Partiendo de un documento html vacío, crea los elementos HTML de una calculadora
 * mediante los métodos del objeto predefinido document.
 * @author Mario Navarro Madrid
 */
{
    function init() {
        createCalculadora();
        display();
    }

    function createCalculadora() {
        let nombre = document.createElement("h1");
        nombre.textContent = "Calculadora - Mario Navarro Madrid";
        let main = document.createElement("main");
        document.body.appendChild(main);
        main.appendChild(nombre);
        main.style.textAlign = "center";
        let cuerpoCalculadora = document.createElement("div");
        cuerpoCalculadora.style.backgroundColor  = "grey";
        cuerpoCalculadora.style.width ="240px";
        cuerpoCalculadora.style.margin ="0px auto";
        let input = document.createElement("input");
        input.value=0;
        input.type = "text";
        input.id ="display";
        input.style.textAlign = "right";
        //input.readOnly = true;
        input.style.width = "236px";
        input.style.height = "30px";
        main.appendChild(cuerpoCalculadora);
        cuerpoCalculadora.appendChild(input);
        let botones = ["CE","DEL","%","+","7","8","9","-","4",
        "5","6","X","1","2","3","/","0" ,"+/-",",","="];
        let contador = 0;
        for (let i = 0; i < 5; i++) {
            let fila = document.createElement("div");
            for (let j = 0; j < 4; j++) {
                let button = document.createElement("button");
                button.style.width = "60px";
                button.style.height = "50px";
                button.className = "botones";
                button.value = botones[contador]
                button.textContent =botones[contador++];
                fila.appendChild(button);
            }
            cuerpoCalculadora.appendChild(fila);
        }
    }

    function display() {
        let input = document.getElementById("display");
        let btns = document.getElementsByClassName("botones");
        Array.prototype.forEach.call(btns, element => {
            element.addEventListener("click",function () {
                switch (element.value) {
                    case "DEL":
                        input.value = input.value.substr(0,input.value.length-1);
                        if(input.value=="-" || input.value.length==0)
                            input.value = 0;
                    break;
                    case "CE":
                        input.value = 0;
                        break;
                    case "0":
                        if(input.value!=0)
                            input.value += 0;
                        break;
                    case "1":
                    case "2":
                    case "3":
                    case "4":
                    case "5":
                    case "6":
                    case "7":
                    case "8":
                    case "9":
                        if(input.value==0 && !input.value.includes("."))
                            input.value = element.value;
                        else
                            input.value += element.value;
                        break;
                    case "+/-":
                        if(input.value>0)
                            input.value = -Math.abs(input.value);
                        else
                            input.value = Math.abs(input.value);
                        break;
                    case ",":
                        if(!input.value.includes("."))
                            input.value += ".";
                        break;
                }
            });
        }
        );

    }

    window.addEventListener("load",init);
}


