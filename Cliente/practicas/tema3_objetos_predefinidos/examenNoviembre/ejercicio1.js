/**
 * @author Mario Navarro Madrid
 */

{
    function init() {
        leerStorage();
        mostrarContador();
        document.getElementById("resetear").addEventListener("click",reset);
        document.getElementById("atras").addEventListener("click",function(event) {
            event.preventDefault();
            window.history.back();
        })
        document.getElementById("recargar").addEventListener("click",function(event) {
            location.reload();
        })
    }

    function reset() {
        localStorage.setItem("contador","reset");
        document.getElementById("info").innerHTML = "RESETEADO";
    }

    function leerStorage() {
        if(localStorage.getItem("contador")==null || localStorage.getItem("contador")=="reset"){
            localStorage.setItem("contador",0);
        }else{
            let contador = localStorage.getItem("contador");
            contador++;
            localStorage.setItem("contador",contador);
        }

    }

    function mostrarContador() {
        let mensaje;
        let contador = localStorage.getItem("contador");
        switch (contador) {
            case "0":
                mensaje = `
                    Bienvenido a mi humilde rinconcito. Acomodate y pilla una bebida. Espero que vuelvas pronto.
                `
                break;
            case "1":
                mensaje = `
                    ¿De nuevo por aquí? Es la segunda vez que vienes, toma unos anacardos.
                `
                break;
            default:
                mensaje = `
                    ¿Te ha gustado el sitio eh? Es la vez número ${localStorage.getItem("contador")} que vienes.
                `
                break;
        }
        document.getElementById("info").innerHTML = mensaje;
    }

    document.addEventListener("DOMContentLoaded",init);

}