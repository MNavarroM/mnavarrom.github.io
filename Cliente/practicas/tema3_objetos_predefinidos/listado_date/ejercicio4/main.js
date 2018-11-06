{
    document.addEventListener("DOMContentLoaded",init);

    function init(){
        btn = document.getElementById("btnValidar");
        btn.addEventListener("click",esFecha);
    }

    function esFecha(){
        let fecha = new Date(document.getElementById("fecha").value);
        let texto = document.getElementById("info");
        let msg = "";
        if(isNaN(fecha.getDate())){
            msg = "El formato de fecha no es válido";
            texto.style.color = "red";
        }else{
            msg = "El formato de fecha es válido";
            texto.style.color = "green";
        }
        texto.textContent = msg;
    }
}