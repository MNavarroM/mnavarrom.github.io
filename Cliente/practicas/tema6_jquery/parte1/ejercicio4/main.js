{

    $(document).ready(function () {
        $("a").mouseenter(function () { 
            $("#capa").addClass("clase");
        });
        $("a").mouseout(function () { 
            $("#capa").removeClass("clase");
        });
    });


}