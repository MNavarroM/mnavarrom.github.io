{
    $(document).ready(function () {
        $("#guardar").click(function (e) { 
            e.preventDefault();
            let valor = document.getElementById("valor").value;
            $("#division").data("midato", valor);
            $("#mensaje").html("He guardado este elemento (id=division) un dato llamado midato con el valor " + valor );
        });
        $("#leer").click(function (e) {
            e.preventDefault();
            let valor = $("#division").data("midato");
            $("#mensaje").html("En este elemento (id=division) leo un dato llamado midato con el valor " + valor );
        });
        $("#borrar").click(function (e) { 
            e.preventDefault();
            $("#division").removeData("midato");
            $("#mensaje").html("Acabo de eliminar del elemento (id=division) el dato llamado midato");
        });
    });
}