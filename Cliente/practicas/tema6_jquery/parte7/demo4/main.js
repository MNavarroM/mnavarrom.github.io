{


    function init() {
        $(".ch").checkboxPersonalizado();
        $("#otro").checkboxPersonalizado({
            activo: false,
            colorTextos: {
                activo: "#f80",
                pasivo: "#98a"
            },
            imagen: {
                activo: 'https://desarrolloweb.com/articulos/ejemplos/jquery/plugins/images/weather_cloudy.png',
                pasivo: 'https://desarrolloweb.com/articulos/ejemplos/jquery/plugins/images/weather_rain.png'
            },
            textos: {
                activo: 'Buen tiempo :)',
                pasivo: 'Buena cara ;)'
            },
            cssAdicional: {
                border: "1px solid #dd5",
                width: "100px"
            },
            nameCheck: "buen_tiempo"
        });
    }

    $(init);


}