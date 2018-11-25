/**
 * @author Mario Navarro Madrid
 */
{
    
    function init() {
        mostrarBisiestos();
        document.getElementById("atras").addEventListener("click",function(event) {
            event.preventDefault();
            window.history.back();
        });
    }

    function mostrarBisiestos() {
        let info = document.getElementById("info");
        let fechas = [new Date(2016,1),new Date(1996,2,15),new Date(1968,5),new Date(1458,2,13),new Date(2006,3),
            new Date(1880,5),new Date(1224,9,24),new Date(2000,5,23)];
        let arrayBisiestos = fechas.filter(fecha => fecha.getFullYear() % 4 == 0 && fecha.getFullYear() % 100 != 0 || fecha.getFullYear() % 400 == 0);
        console.log(arrayBisiestos)
        arrayBisiestos.forEach(fecha => info.innerHTML+= fecha + "<br/>");
    }

    document.addEventListener("DOMContentLoaded",init);

}