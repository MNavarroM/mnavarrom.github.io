/**Ejercicio 19 Mejorar el tooltip propuesto añadiendo las siguientes características:
 * Que el tooltip no se muestre instantáneamente, sino que transcurra un cuarto de segundo
 * hasta que se muestre (pista: DELAY)
 * Que exista una separación horizontal de 15 píxel entre el puntero del ratón y el tooltip
 * (pista: OFFSETX)
 *  Que el tooltip se muestre en la parte superior del puntero del ratón y no en la parte
 * inferior (pista: ABOVE)
 * El nuevo aspecto del tooltip se muestra en la siguiente imagen:
 *@author Mario Navarro Madrid
 */
{
    function init() {
        document.getElementById("info").addEventListener("mouseover",showToolTip);
        document.getElementById("info").addEventListener("mouseout",hideToolTip);
    }

    function showToolTip() {
        overlib('Prueba de un tooltip básico y muy sencillo.',WIDTH,150,FGCOLOR,'#ffffcc',
        DELAY,250,OFFSETX,15,ABOVE);
    }

    function hideToolTip(){
        nd();
    }

    window.addEventListener("load",init);
}