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
        main = document.createElement("main");
        document.body.appendChild(main);
        main.appendChild(nombre);
        main.style.textAlign = "center";
        cuerpoCalculadora = document.createElement("div");
        cuerpoCalculadora.style.backgroundColor  = "grey";
        cuerpoCalculadora.style.width ="240px";
        cuerpoCalculadora.style.margin ="0px auto";
        input = document.createElement("input");
        input.value=0;
        input.type = "text";
        input.id ="display";
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
        input = document.getElementById("display");
        btns = document.getElementsByClassName("botones");
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
                        if(input.value==0)
                            input.value = 1;
                        else
                            input.value += 1;
                        break;
                    case "2":
                        if(input.value==0)
                            input.value = 2;
                        else
                            input.value += 2;
                        break;
                    case "3":
                        if(input.value==0)
                            input.value = 3;
                        else
                            input.value += 3;
                        break;
                    case "4":
                        if(input.value==0)
                            input.value = 4;
                        else
                            input.value += 4;
                        break;
                    case "5":
                        if(input.value==0)
                            input.value = 5;
                        else
                            input.value += 5;
                        break;
                    case "6":
                        if(input.value==0)
                            input.value = 6;
                        else
                            input.value += 6;
                        break;
                    case "7":
                        if(input.value==0)
                            input.value = 7;
                        else
                            input.value += 7;
                        break;
                    case "8":
                        if(input.value==0)
                            input.value = 8;
                        else
                            input.value += 8;
                        break;
                    case "9":
                        if(input.value==0)
                            input.value = 9;
                        else
                            input.value += 9;
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


