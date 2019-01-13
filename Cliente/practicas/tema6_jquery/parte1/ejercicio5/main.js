{
    $(document).ready(function () {
        $("#edad").click(function (e) { 
            //e.preventDefault();
            if($("#edad").prop("checked"))
                $("#capa").css('display', 'block');
            else
                $("#capa").css('display', 'none');
        });
    });
}