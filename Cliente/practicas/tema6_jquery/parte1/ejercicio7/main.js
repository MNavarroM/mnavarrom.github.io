{
    $(document).ready(function () {
        $("#callback").click(function (e) { 
            e.preventDefault();
            $("#capa").fadeOut(1000, function () {
                $("#capa").css({"top": 300,"left":200});
                $("#capa").fadeIn(1000);
            });
        });
    });
}