/**
 * 
 */
{
    $(document).ready(function () {
        $("#botonA").click(function (e) { 
            e.preventDefault();
            $('#capa').html("Has hecho click en el botón A.");
        });
        $("#botonB").click(function (e) { 
            e.preventDefault();
            $('#capa').html("Has hecho click en el botón B.");
        });
    });


}