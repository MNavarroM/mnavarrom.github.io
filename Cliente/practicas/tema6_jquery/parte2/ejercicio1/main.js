/**
 * 
 */
{
    $(document).ready(function () {
        let elemento = $("<div><h1>Nuevo elemento desde Jquery...</h1></br><p>Guardados con $().</p>");
        $("body").css("background-color", "brown");
        elemento.appendTo("body");
    });


}