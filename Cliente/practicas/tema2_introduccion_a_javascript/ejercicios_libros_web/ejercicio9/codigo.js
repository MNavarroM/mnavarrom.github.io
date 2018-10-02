/**Definir una función que muestre información sobre una cadena de texto que se le pasa como
 * argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está
 * formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.
 * @author Mario Navarro Madrid
 */
{
    function countString(string) {
        let message;
        let mayus, minus;
        for(let i = 0; i<string.length;i++){
            if(string.charAt(i) == string.charAt(i).toUpperCase()){
                message = "La palabra " + string + " está formada por mayúsculas";
                mayus = true;
            }
            else if(string.charAt(i) == string.charAt(i).toLowerCase()){
                message = "La palabra " + string + " está formada por minúsculas";
                minus = true;
            }
            if(mayus==true && minus==true){
                message = "La palabra " + string + " está formada por mayúsculas y minúsculas";
            }

        }
        document.getElementById("message").textContent = message;
    }

    function init(){
        countString(prompt("Introduce una palabra"));
    }

    window.addEventListener("load",init);

}