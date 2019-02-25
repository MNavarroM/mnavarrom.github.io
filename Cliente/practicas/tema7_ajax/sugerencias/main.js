$(function () {
    $("input").on("input",function (e) { 
        if($(this).val().trim() === ""){
            $("#coincidencias").css({
                backgroundColor: "none"
            });
            $("#coincidencias").html("");
            return;
        }
        $.get("http://cpd.iesgrancapitan.org:9119/~qnmama/nombres.php", {"coincidencia" : $("input").val()},
            function (data, textStatus, jqXHR) {
                let template = "";
                $.each(JSON.parse(data), function (indexInArray, valueOfElement) { 
                    console.log(data);
                    template+="<span class=coincidencia>"+valueOfElement+"</span><br/>";
                });
                $("#coincidencias").css({
                    backgroundColor: "white"
                });
                $("#coincidencias").html(template);
            },
        );
    });
});