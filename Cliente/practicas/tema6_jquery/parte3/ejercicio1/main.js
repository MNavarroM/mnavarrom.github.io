/**
 * 
 */
{
    $(document).ready(function () {
        $("#boton").click(function (e) { 
            e.preventDefault();
            let texto = $("#camposelector").prop("value");
            if(texto==="")
                $("#mensaje").html("Debes escribir algo en el campo de texto.");
            else{
                let textoEscrito = $(texto);
                textoEscrito.fadeOut("slow",function () {
                    textoEscrito.fadeIn("slow");
                });
                $("#mensaje").html("Debes escribir algo en el campo de texto.");
            }
        });
    });


}