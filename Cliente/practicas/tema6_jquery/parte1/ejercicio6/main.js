{
    $(document).ready(function () {
        $("#mostrar").click(function (e) { 
            e.preventDefault();
            $("#capa").show(500);
        });
        $("#ocultar").click(function (e) { 
            e.preventDefault();
            $("#capa").hide("slow");
        });
    });
}