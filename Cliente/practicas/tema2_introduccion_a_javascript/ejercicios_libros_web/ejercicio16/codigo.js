/**Crear un script que informe al usuario en que zona de la pantalla ha pulsado el ratón.
 * Las zonas definidas son las siguientes: izquierda arriba, izquierda abajo, derecha arriba
 * y derecha abajo. Para determinar el tamaño de la ventana del navegador, utilizar la
 * función tamanoVentanaNavegador() proporcionada.
 * @author Mario Navarro Madrid
 */
{
    function showPosition(evento){
        let mensaje="Estás en la parte ";
        if(evento.screenX>window.innerWidth/2)
            mensaje+="derecha y ";
        else
            mensaje+="izquierda y ";
        if(evento.screenY>window.innerHeight/2)
            mensaje+="abajo ";
        else
            mensaje+="arriba ";
        mensaje+="de la pantalla.";
        escribir_mensaje(mensaje);
    }

    function escribir_mensaje(mensaje){
        document.getElementById("info").textContent = mensaje;
    }

    function init(){
        document.addEventListener("click",showPosition);
    }

    window.addEventListener("load",init);
}


