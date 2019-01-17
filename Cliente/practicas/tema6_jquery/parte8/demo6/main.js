{
    function init() {
        $("#botoncomenzar").click(function () {
            capa = $("#micapa");
            capa.queue(function (continua) {
                $("button.botondetener").show(500);
                continua();
            });
            capa.animate({
                "left": "0px"
            }, 5000);
            capa.animate({
                "left": "200px"
            }, 5000);
            capa.queue(function (continua) {
                $("button.botondetener").hide(500);
                continua();
            });
        });
        $("#botonparar").click(function () {
            $("#micapa").stop();
        });
        $("#botonpararllegar").click(function () {
            $("#micapa").stop(false, true);
        });
        $("#botonparartodo").click(function () {
            $("#micapa").queue([]);
            $("#micapa").stop();

            console.log("Lo he parado todo!, ni se ocultarán los botones de parar. Pasos encolados: " + $("#micapa").queue().length)
        });
    }
    $(init);
}