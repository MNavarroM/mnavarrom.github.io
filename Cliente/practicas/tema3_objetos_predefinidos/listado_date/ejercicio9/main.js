/**Implementa el método calcularEdad() que devuelva la edad indicando la fecha de nacimiento.
 * En caso de tener menos de un año, indicar días y meses transcurridos. Indicar errores.
 * @author Mario Navarro Madrid
 */
{
    function init() {
        document.getElementById("button").addEventListener("click",calcularFecha);
    }

    function calcularFecha(){
        let fechaActual = new Date();
        let fechaCumpleaños = new Date(document.getElementById("fecha").value);
        let edad = fechaActual.getFullYear() - fechaCumpleaños.getFullYear();
        if(fechaActual.getMonth()<fechaCumpleaños.getMonth() ||
            (fechaCumpleaños.getMonth()==fechaActual.getMonth() && fechaCumpleaños.getDate()<fechaActual.getDate()))
                --edad;
        document.getElementById("info").innerHTML = "Tienes " + edad + " años";

    }

    document.addEventListener("DOMContentLoaded",init);
}