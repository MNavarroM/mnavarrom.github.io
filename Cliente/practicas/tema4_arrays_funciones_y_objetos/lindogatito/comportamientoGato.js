{

    function init() {
        document.getElementById("imagen").src = "gato.png";
        document.getElementById("jugar").addEventListener("click",jugar);
        document.getElementById("comer").addEventListener("click",comer);
        document.getElementById("dormir").addEventListener("click",dormir);
        document.getElementById("jugar").addEventListener("click",jugar);
        document.getElementById("garrotillo").addEventListener("click",garrotillo);
    }

    function comer() {
        if(gato.vivo){
            gato.comer();
            document.getElementById("imagen").src = "gatocomiendo.gif";
            document.getElementById("estado").innerHTML = "ÑAM ÑAM, que rico!"
            document.getElementById("peso").innerHTML = gato.getPeso();
        }else{
            garrotillo();
        }
    }

    function dormir() {
        if(gato.vivo){
            document.getElementById("imagen").src = "gatodurmiendo.gif";
            document.getElementById("estado").innerHTML = "A dormir!";
        }else
            garrotillo();
    }

    function jugar() {
        if(gato.vivo){
            gato.jugar();
            document.getElementById("imagen").src = "gatojugando.gif";
            document.getElementById("estado").innerHTML = "Que diversión!"
            document.getElementById("peso").innerHTML = gato.getPeso();
        }else
            garrotillo();

    }

    function garrotillo() {
        gato.garrotillo();
        document.getElementById("peso").innerHTML = "RIP"
        document.getElementById("imagen").src = "ripgato.jpg";
        document.getElementById("estado").innerHTML = "RIP gatete"
    }

    document.addEventListener("DOMContentLoaded",init);

}