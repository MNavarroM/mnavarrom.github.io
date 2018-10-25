/** Reloj. Crea una página que cada segundo te muestre actualizado un reloj digital del tipo "22:14:09 h" (usa timing events del objeto window)
 * @author Mario Navarro Madrid
 */
{
    function init() {
        setInterval("clock()",1000);
    }

    function clock(){
        let reloj = document.getElementById("reloj");
        let horas = new Date().getHours();
        let minutos = new Date().getMinutes();
        let segundos = new Date().getSeconds();
        if(horas<10)
            horas = "0" + horas;
        if(minutos<10)
            minutos = "0" + minutos;
        if(segundos<10)
            segundos = "0" + segundos;
        reloj.textContent = "Hora: " + horas + ":" + minutos + ":" + segundos;
    }

    document.addEventListener("DOMContentLoaded",init);
}