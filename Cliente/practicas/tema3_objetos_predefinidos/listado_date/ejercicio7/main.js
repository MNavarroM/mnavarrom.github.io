/**Implementa el método diaDeLaSemana() que devuelva 'lunes, martes... domingo' del día actual o de la fecha indicada
 * (similar al constructor) 
 * 
 * @author Mario Navarro Madrid
 */
{
    let dias =  ["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"];

    function init() {
        let info = document.getElementById("info");
        document.getElementById("diaFecha").addEventListener("click",diaFecha);
        document.getElementById("diaHoy").addEventListener("click",diaHoy);
    }

    function diaFecha() {
        let fecha = new Date(document.getElementById("fecha").value);
        info.innerHTML = "Ese día era " + dias[fecha.getDay()-1];

    }

    function diaHoy() {
        
        info.innerHTML = "Hoy es " + dias[new Date().getDay()-1];
    }

    document.addEventListener("DOMContentLoaded",init);
}