/**
 * @author Mario Navarro Madrid
 */
{

    function init() {
        parsearJson();
        document.getElementById("atras").addEventListener("click",function(event) {
            event.preventDefault();
            window.history.back();
        });
    }

    function parsearJson() {
        let objeto = {nombre: "Mario", apellidos: "Navarro Madrid", aprobado: false};
        let json = JSON.stringify(objeto);
        let objeto1 = JSON.parse(json);
        document.getElementById("json").innerHTML+=json;
        document.getElementById("objeto").innerHTML+= `El objeto.nombre es : "  ${objeto1.nombre}  </br>
        El objeto.apellidos es : "  ${objeto1.apellidos}  </br>
        El objeto.aprobado es : "  ${objeto1.aprobado } </br>
        `;
    }

    document.addEventListener("DOMContentLoaded",init);

}