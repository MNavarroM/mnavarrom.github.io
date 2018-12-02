/**
 * @author Mario Navarro Madrid
 */

{

    function init() {
        let cadena = "Hola, mi nombre es Mario Navarro Madrid y soy programador";
        let info = document.getElementById("info");
        try {
            info.innerHTML = `
                Para la cadena "${cadena}" el resultado del método extendido truncar "cadena.truncar(39)" es </br>"${cadena.truncar(39)}"
            `
        } catch (error) {
            info.innerHTML = error;
        }
    }

    String.prototype.truncar = function (long) {
        let longitud = long;
        if(longitud<this.length)
            return this.substring(0,longitud);
        else
            throw new Error("La longitud debe ser menor al tamaño de la cadena");
    }

    document.addEventListener("DOMContentLoaded",init);

}