/** A partir de la página web proporcionada, completar el código JavaScript para que:
 * 1.Cuando se pinche sobre el primer enlace, se oculte su sección relacionada
 * 2.Cuando se vuelva a pinchar sobre el mismo enlace, se muestre otra vez esa sección
 * de contenidos
 * 3.Completar el resto de enlaces de la página para que su comportamiento sea
 * idéntico al del primer enlace
 * 4.Cuando una sección se oculte, debe cambiar el mensaje del enlace asociado
 * (pista: propiedad innerHTML)
 * @author Mario Navarro Madrid
 */

{

    window.addEventListener("load",init);

    function hideShow() {
        //let idEnlace = this.id;
        //let enlace = idEnlace.split("_");
        //let contenido = document.getElementById("contenidos_"+enlace[1]);
        let contenido = document.getElementById("contenidos_"+this.id.slice(7));
        if(contenido.style.display == "none"){
            contenido.style.display = "inline-block";
            this.textContent = "Ocultar contenidos";
        }
        else{
            contenido.style.display = "none";
            this.textContent = "Mostrar contenidos";
        }
    }

    function init() {
        let enlaces = document.getElementsByTagName("a")
            for (let i = 0; i < enlaces.length; i++){
                enlaces[i].addEventListener('click',hideShow);
            }
        };
    }
