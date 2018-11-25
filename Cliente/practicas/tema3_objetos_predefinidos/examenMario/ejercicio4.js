/**
 * @author Mario Navarro Madrid
 */
{
    let regexTlf = /^[9|7|6][0-9]{8,8}$/;
    let regexUser = /^(?=(?:.*[A-Z])+)(?=(?:.*[a-z])+)\S{8,}$/;
    let regexPassword = /^(?=(?:.*\d)+)(?=(?:.*[A-Z])+)(?=(?:.*[a-z])+)\S{8,}$/;

    function init() {
        let info = document.getElementById("info");
        document.getElementById("button").addEventListener("click", function(){
            try {
                checkUser();
                checkPassword();
                checkTlf();
                info.innerHTML = "Los datos de usuario son válidos!";
            } catch (error) {
                if(error instanceof RegexException){
                    info.innerHTML = error.msg;
                }
                    
            }
        });
        document.getElementById("atras").addEventListener("click",function(event) {
            event.preventDefault();
            window.history.back();
        });
    }

    function checkUser(){
        if(!regexUser.test(document.getElementById("user").value))
            throw new RegexException("El nombre de usuario no cumple los requisitos");
    }

    function checkPassword(){
        if(!regexPassword.test(document.getElementById("password").value))
            throw new RegexException("La contraseña no cumple los requisitos");
    }

    function checkTlf(){
        if(!regexTlf.test(document.getElementById("tlf").value))
            throw new RegexException("El teléfono no es correcto");
    }

    function RegexException(msg) {
        this.msg = msg;
    }

    document.addEventListener("DOMContentLoaded", init);

}