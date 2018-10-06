{
    window.addEventListener("load",init);
    let num=3;

    function init(){
        document.getElementById("textarea").addEventListener("keypress",limitTextArea);
    }
    
    function limitTextArea(evento){
        let textArea = document.getElementById("textarea");
        let teclas_especiales = [8, 37, 39, 46];
        if(textArea.value.length >= num) {
            evento.preventDefault();
            return false;
         }else {
            return true;
        }
    }

}