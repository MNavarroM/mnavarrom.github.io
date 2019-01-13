{
    $(document).ready(function () {
        $("div").each(function (index) {
            if($(this).html() == "white")
                return true;
            if($(this).html() == "nada")
                return false;
            $(this).css("color", $(this).html());
        });
    });

}