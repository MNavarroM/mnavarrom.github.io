{
    $(document).ready(function () {
        $(".mienlace").click(function (e) {
            e.preventDefault();
            console.log("Has hecho clicnComo he hecho preventDefault, no te llevaré al href");
        });
    });
}