{
    $(document).ready(function () {
        $("p").each(function (index) {
            if(index%2==0)
                $(this).css("background-color", "#eee");
            else
            $(this).css("background-color", "#ccc");
            
        });
    });
}