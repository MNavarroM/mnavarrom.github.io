/**Implementa el método esFecha() que devuelva si el argumento es una fecha o no.
 * @author Mario Navarro Madrid
 */

{
    function init(){
        btn = document.getElementById("btnValidar");
        btn.addEventListener("click",fecha);
    }

    function fecha() {
        let fecha = new Date(document.getElementById("fecha").value);
        let texto = document.getElementById("info");
        if (esFecha(fecha))
            texto.innerHTML = "La fecha " + fecha + " es válida";

    }

    function esFecha(fecha){
        if(isNaN(fecha.getDate())){
            throw new ExceptionFecha("El formato de fecha no es válido");
        }
        return true;
    }

    function ExceptionFecha(mensaje) {
        this.mensaje = mensaje;
        this.nombre = "ExceptionFecha";
    }

    document.addEventListener("DOMContentLoaded",init);

}
