$(function () {
    $("button").mousedown(function () {
        let id = $(this).attr("id");
        let template = "<br/><br/><select><option selected disabled>Selecciona una opción</option>";
        switch (id) {
            case "skillLife":
                $.getJSON("skillLife.json",
                    function (data, textStatus, jqXHR) {
                        data.skills.forEach(element => {
                            template += "<option data='"+element.descripcion + "'>" + element.skill + "</option>";
                        });
                        template += "</select>";
                        template+="<p id=descripcion></p>"
                        $("#info").html(template);
                        $("select").on("change", function () {
                            $("#descripcion").html($(this).find('option:selected').attr("data"));
                        });
                    }
                );
                break;
            case "perfilesIT":
                $.getJSON("perfilesIT.json",
                    function (data, textStatus, jqXHR) {
                        data.perfiles.forEach(element => {
                            template += "<option data='" +element.descripcion + "'>" + element.perfil + "</option>";
                        });
                        template += "</select>";
                        template+="<p id=descripcion></p>"
                        $("#info").html(template);
                        $("select").on("change", function () {
                            $("#descripcion").html($(this).find('option:selected').attr("data"));
                        });
                    }
                );
                break;
            case "tipoDesarrolladores":
                $.getJSON("tipoDesarrolladores.json",
                    function (data, textStatus, jqXHR) {
                        console.log(data);
                        $.each(data, function (indexInArray, valueOfElement) { 
                             template+="<option data='" + indexInArray + "'>" + indexInArray +"</option>";
                        });
                        template += "</select>";
                        template+="<p id=descripcion></p>"
                        $("#info").html(template);
                        let habilidades = "";
                        $("select").on("change", function () {
                            let habilidad = $(this).find('option:selected').attr('data');
                            let arrayHabilidades = data[habilidad];
                            console.log(arrayHabilidades);
                            arrayHabilidades.forEach(element => {
                                habilidades += "<input type='checkbox'   value='" + element + "'>" + element;
                            });
                            $("#descripcion").html(habilidades);
                            habilidades = "";
                        });
                    }
                );
                break;
        }
    });
});