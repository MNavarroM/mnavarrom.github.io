{
    $(document).ready(function () {
        $("#micapa").css({
            "background-color": "#ff8800",
            "position": "absolute",
            "width": "100px",
            "height" : "100px",
            "top": "100px",
            "left": "200px"
        });
        $("#micapa").mouseover(function () {
            let antiguoLeft = parseInt($(this).css("left"));
            $(this).css("left", antiguoLeft + 10 + "px");
        });
        $("#micapa").click(function () {
            $(this).css("width", function (index, value) {
                let aumento = 25;
                return (parseInt(value) + parseInt(aumento)) + "px";
            });
        });
    });
}