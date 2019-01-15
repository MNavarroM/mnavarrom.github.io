{
    $(document).ready(function () {
        let string = "Modificando atributos de los enlaces con jQuery...</br>";
        $("a").attr({
            'title' : 'iesgrancapitan.org',
            'href' : 'https://moodle.iesgrancapitan.org',
            'style' : 'color: blue'
            
        });
        $("a").each(function (index, element) {
            let titulo = $(this).attr("title");
            let href = $(this).attr('href');
            string+="Título de enlace " + index + " es " + titulo + " y su href es " + href + "</br>";
        });
        $("#info").html(string);
    });
}