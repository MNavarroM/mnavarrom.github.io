/**¿Cuántos constructores tiene el objeto predefinido Date()? Explícalos mediante ejemplos.
 * @author Mario Navarro Madrid
 */
{
    function init() {
        let dateNow = new Date();
        let dateString = new Date("2018-1-21");
        let dateMiliseconds = new Date(999897788839);
        let date = new Date(2018,2,17,12,45,12);
        document.getElementById("info").innerHTML = `
            Existen cuatro formas de instanciar un objeto Date.</br></br>
            Sin argumentos : new Date() - Obtiene la fecha actual </br>
            String como argumento : new Date("2018-1-21") - Obtiene la fecha de la cadena pasada, si el formato es válido.</br>
            Entero como argumento : new Date(999897788839) - Obtiene la fecha de los milisegundos pasados.</br>
            De 2 a 6 argumentos : new Date(2018,2,17,12,45,12) - Obtiene la fecha con los valores pasados(año, mes ,dia, hora, minutos y milisegundos). 
        `;
    }


    document.addEventListener("DOMContentLoaded",init);
}