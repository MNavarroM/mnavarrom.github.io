$(function () {
    $("input").keydown(function (e) { 
        $.getJSON("http://127.0.0.1/nombres.php", {"coincidencia" : "mario"},
            function (data, textStatus, jqXHR) {
                console.log(data);
            },
        );
    });
});