{
    let numClics = 0;
    let numDobleClics = 0;
    $(document).ready(function () {
        $("#micapa").dblclick(function (e) {
            numDobleClics++;
            $("#mensaje").html("Doble Clic " + numDobleClics);
        });
        $("#micapa").click(function (e) {
            numClics++;
            $("#mensaje").html("Clic " + numClics);
        });
    })
}