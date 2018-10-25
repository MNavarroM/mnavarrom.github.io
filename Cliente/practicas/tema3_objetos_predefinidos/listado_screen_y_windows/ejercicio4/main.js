/** Mi URL. Crea una página que te muestre debidamente desglosada la url. (servidor, protocolo, ruta...)
 * @author Mario Navarro Madrid
 */
{
    function init() {
        showInfo();
    }

    function showInfo() {
        info = document.getElementById("info");
        infoLocation = window.location;
        for (const key in infoLocation) {
            if (infoLocation.hasOwnProperty(key)) {
                info.innerHTML += "<b>" + key + "</b> : <i>" + infoLocation[key] + "</i></br>";   
            }
        }
    }

    document.addEventListener("DOMContentLoaded",init);
}