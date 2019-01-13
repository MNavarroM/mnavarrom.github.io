{
    $(document).ready(function () {
        $("a").click(function (e) { 
            e.preventDefault();
            alert("Redirigiendo a Moodle... Oh, bloqueamos el evento :)");
        });
    });
}