/**Implementa el método esBisiesto() que devuelva si una fecha/año es bisiesto o no. En caso de que el argumento
 * no sea una fecha, que salte una excepción. Admitirá tantos parámetros como el constructor Date().
 * Pruébalo con varias invocaciones fallidas (y capturadas)
 * @author Mario Navarro Madrid
 */
{
    document.addEventListener("DOMContentLoaded",init);

    function init(){
        btn = document.getElementById("btnValidar");
        btn.addEventListener("click",esBisiesto);
    }

    function esBisiesto() {
        let fecha = new Date(document.getElementById("fecha").value);
        let anno = fecha.getFullYear();
        let texto = document.getElementById("info");
        let msg = "";
        try {
            if (esFecha(fecha))
            if(anno%4==0 && (anno%100!==0 || anno%400==0))
                msg = "El año " + fecha.getFullYear() + " es bisiesto";
            else
                msg = "El año " + fecha.getFullYear() + " no es bisiesto";            
        } catch (excepcion) {
            texto.innerHTML = excepcion.mensaje;
        }
        texto.innerHTML = msg;
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
}