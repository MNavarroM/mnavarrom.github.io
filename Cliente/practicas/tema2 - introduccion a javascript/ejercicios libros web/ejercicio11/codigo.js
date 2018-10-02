/**A partir de la página web proporcionada y utilizando las funciones DOM, mostrar por
 * pantalla la siguiente información:
 * 1.Número de enlaces de la página
 * 2.Dirección a la que enlaza el penúltimo enlace
 * 3.Numero de enlaces que enlazan a http://prueba
 * 4. Número de enlaces del tercer párrafo
 * @author Mario Navarro Madrid
 */

 {

    let enlaces = document.getElementsByTagName("a");

    function numEnlaces() {
        document.getElementById("numenlaces").textContent = "La web tiene " + enlaces.length + " enlaces";
    }

    function penultimoEnlace(){
        document.getElementById("penultimoenlace").textContent = "El penúltimo enlace apunta a " + enlaces[enlaces.length-2].href;
    }

    function numEnlacesPrueba(){
        let numEnlaces=0;
        for (let i = 0; i < enlaces.length; i++) {
            if(enlaces[i].href == "http://prueba/"){
                numEnlaces++;
            }
        }
        document.getElementById("enlacesaprueba").textContent = numEnlaces + " enlaces apuntan a  http://prueba";
    }

    function numEnlacesTercerParrafo() {
        let parrafos = document.getElementsByTagName("p");
        let enlaces = parrafos[2].getElementsByTagName("a");
        document.getElementById("enlacestercerparrafo").textContent ="En el tercer párrafo tenemos " + enlaces.length + " enlaces";
    }

    function init() {
        numEnlaces();
        penultimoEnlace();
        numEnlacesPrueba();
        numEnlacesTercerParrafo();
    }

    window.addEventListener("load",init);


 }
