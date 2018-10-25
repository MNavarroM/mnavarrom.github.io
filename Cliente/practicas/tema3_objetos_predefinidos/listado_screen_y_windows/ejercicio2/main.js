/** El objeto window dispone de las propiedades scrollX, scrollY y scrollbars.
 * Muéstralos reaccionando al evento scroll sobre window.
 * @author Mario Navarro Madrid
 */
{
    function init(){
        showProperties();
        document.addEventListener("scroll",showProperties);
    }

    function showProperties() {
        document.getElementById("scrollX").textContent = "Scroll de X :" + window.scrollX;
        document.getElementById("scrollY").textContent = "Scroll de Y :" + window.scrollY;
        document.getElementById("scrollbars").textContent = "¿Hay scroll? :" + window.scrollbars.visible;
    }

    document.addEventListener("DOMContentLoaded",init);
}