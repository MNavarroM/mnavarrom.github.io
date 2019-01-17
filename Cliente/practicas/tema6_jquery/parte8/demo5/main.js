{
    function init() {
        $("#botoncomenzar").click(function () {
            capa = $("#micapa");
            capa.animate({
                "width": "80px"
            }, 1000);
            capa.queue(function () {
                $(this).css({
                    "border": "3px solid #339",
                });
                $("#botoncomenzar").text("Acabo de ponerle el borde... puedes seguir pulsando para encolar más funciones");
                $(this).dequeue();
            });
            capa.animate({
                "height": "200px"
            }, 2000);
            capa.queue(function (continua) {
                $(this).css({
                    "border": "0px"
                });
                $("#botoncomenzar").text("Quitado el borde... puedes seguir pulsando para encolar más funciones");
                continua();
            });
            capa.animate({
                "height": "50px",
                "width": "400px"
            }, 1000);
        });

    }
    $(init);
}