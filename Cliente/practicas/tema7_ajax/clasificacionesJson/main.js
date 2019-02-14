$(function () {
    $("button").mousedown(function () {
        let id = $(this).attr("id");
        let template = "<ul>";
        switch (id) {
            case "skillLife":
                $.getJSON("skillLife.json",
                    function (data, textStatus, jqXHR) {
                        data.skills.forEach(element => {
                            template += "<li>" + element.skill + " : " + element.descripcion + "</li>";
                        });
                        template += "</ul>";
                        $("#info").html(template);
                    }
                );
                break;
            case "perfilesIT":
                $.getJSON("perfilesIT.json",
                    function (data, textStatus, jqXHR) {
                        data.perfiles.forEach(element => {
                            template += "<li>" + element.perfil + " : " + element.descripcion + "</li>";
                        });
                        template += "</ul>";
                        $("#info").html(template);
                    }
                );
                break;
            case "tipoDesarrolladores":
                $.getJSON("tipoDesarrolladores.json",
                    function (data, textStatus, jqXHR) {
                        data.desarrolladores.forEach(element => {
                            if (element.tipo !== "Desarrollador Full stack") {
                                template += "<li>" + element.tipo + " : " + element.descripcion + "</li><ul>";
                                element.lenguajes.forEach(lenguaje => {
                                    template += "<li>" + lenguaje.lenguaje + " : " + lenguaje.descripcion + "</li>";
                                });
                                template += "</ul>"
                            } else
                                template += "<li>" + element.tipo + " : " + element.descripcion + "</li>";
                        });
                        template += "</ul>";
                        $("#info").html(template);
                    }
                );
                break;
        }
    });
});