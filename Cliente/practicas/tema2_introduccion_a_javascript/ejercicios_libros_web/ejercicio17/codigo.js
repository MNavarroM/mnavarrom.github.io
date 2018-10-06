/**Mejorar el ejemplo anterior indicando en todo momento al usuario el número de
 * caracteres que aún puede escribir. Además, se debe permitir pulsar las teclas
 * Backspace, Supr. y las flechas horizontales cuando se haya llegado al máximo número
 * de caracteres.
 * @author Mario Navarro Madrid
 */
{
    window.addEventListener("load",init);
    let num=10;

    function init(){
        document.getElementById("textarea").addEventListener("keypress",limitTextArea);
        document.getElementById("textarea").addEventListener("keydown",updateNum);
    }

    function updateNum(){
        document.getElementById("numMaximo").textContent = document.getElementById("textarea").value.length;
    }

    function limitTextArea(evento){
        let textArea = document.getElementById("textarea");
        if(textArea.value.length >= num) {
            evento.preventDefault();
            return false;
         }else {
            return true;
        }
    }
}