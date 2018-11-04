/**Para ello, crea un formulario con tres campos: nombre, dni y fecha de nacimiento.
 * Al perder el foco de la caja de texto del DNI se realizará la comprobación.
 * Aparecerá un mensaje (Derecha o abajo) en rojo, indicando:
 * formato incorrecto
 * letra incorrecta
 * introduce dni(si está vacío)
 * @author Mario Navarro Madrid
 */
{
    let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    let regexDNI = new RegExp("^([\\d]{8})[-\\ ]?([A-Z[^IÑOU])$");

    function init() {
        document.getElementById("dni").addEventListener("focusout",checkDNI);
    }

    function checkDNI() {
        let valor = document.getElementById("dni").value;
        if(valor==0)
            document.getElementById("error").innerHTML = " Debes introducir el DNI";
        else if(!regexDNI.test(valor))
            document.getElementById("error").innerHTML = " El formato del DNI no es correcto";
        else{
            let arrayDNI = regexDNI.exec(valor);
            let numDNI = arrayDNI[1];
            let letraDNI = arrayDNI[2];
            if(letras[numDNI%23]!=letraDNI)
                document.getElementById("error").innerHTML = " El DNI no es correcto";
            else
                document.getElementById("error").innerHTML = "";
        }
    }

    document.addEventListener("DOMContentLoaded",init);
}