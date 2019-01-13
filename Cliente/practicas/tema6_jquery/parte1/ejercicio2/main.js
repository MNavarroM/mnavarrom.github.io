{
    $(document).ready(function () {
        $('#capa').mouseenter(function () { 
            $('#mensaje').css('display', 'block');
        });
        $('#capa').mouseleave(function () { 
            $('#mensaje').css('display', 'none');
        });
    });
}