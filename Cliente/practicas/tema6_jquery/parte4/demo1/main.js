{
    $(document).ready(function () {
        let string = "";
        $("a").each(function (index, element) {
            let titulo = $(this).attr("title");
            string+="Título de enlace " + index + " es " + titulo + "</br>";
        });
        $("#info").html(string);
    });
}