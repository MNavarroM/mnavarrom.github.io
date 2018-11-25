/**
 * @author Mario Navarro Madrid
 */
{
    let frutas = new Set(["Manzana","Plátano"]);
    function init() {
        msgError = document.getElementById("error");
        document.getElementById("atras").addEventListener("click",function(event) {
            event.preventDefault();
            window.history.back();
        })
        document.getElementById("button").addEventListener("click",function(){
            try{
                add();
            }catch(error){
                if(error instanceof FrutaExisteException){
                    msgError.innerHTML = error.mensaje;
                }
            }
        });
    }

    function add(){
        let fruta = document.getElementById("elemento").value;
        if(!frutas.has(fruta)){
            let elemento = document.createElement("li");
            let texto = document.createTextNode(fruta);
            elemento.appendChild(texto);
            document.getElementById("frutas").appendChild(elemento);
            frutas.add(fruta);
            msgError.innerHTML = "";
        }else{
            throw new FrutaExisteException("La fruta ya existe en la lista");
        }
    }

    function FrutaExisteException(msg) {
        this.mensaje = msg;
    }


    document.addEventListener("DOMContentLoaded",init);
}