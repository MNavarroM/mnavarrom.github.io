{

    $(document).ready(function () {
        let contadorTexto = 0;
        $("p").each(function() {
            contadorTexto+=$(this).length;
        });
        $("#capa").html("Hay " + $("p").length + " párrafos.");
    });


}