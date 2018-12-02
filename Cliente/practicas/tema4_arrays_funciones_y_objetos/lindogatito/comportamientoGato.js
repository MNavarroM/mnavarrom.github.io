{
    function init() {
        let imagen = document.getElementById("imagen");
        let btnJugar = document.getElementById("jugar");
        let btnComer = document.getElementById("comer");
        let btnDormir = document.getElementById("dormir");
        let btnGarrotillo = document.getElementById("garrotillo");
        let estado = document.getElementById("estado");
        let peso = document.getElementById("peso");
        imagen.src = "gato.png";
        btnJugar.addEventListener("click",jugar);
        btnComer.addEventListener("click",comer);
        btnDormir.addEventListener("click",dormir);
        btnGarrotillo.addEventListener("click",garrotillo);
    }

    function comer() {
        if(gato.vivo){
            gato.comer();
            imagen.src = "gatocomiendo.gif";
            estado.innerHTML = "ÑAM ÑAM, que rico!"
            peso.innerHTML = gato.getPeso();
        }else{
            garrotillo();
        }
    }

    function dormir() {
        if(gato.vivo){
            imagen.src = "gatodurmiendo.gif";
            estado.innerHTML = "A dormir!";
        }else
            garrotillo();
    }

    function jugar() {
        if(gato.vivo){
            gato.jugar();
            imagen.src = "gatojugando.gif";
            estado.innerHTML = "Que diversión!"
            peso.innerHTML = gato.getPeso();
        }else
            garrotillo();

    }

    function garrotillo() {
        gato.garrotillo();
        peso.innerHTML = "RIP"
        imagen.src = "ripgato.jpg";
        estado.innerHTML = "RIP gatete"
    }

    document.addEventListener("DOMContentLoaded",init);

}