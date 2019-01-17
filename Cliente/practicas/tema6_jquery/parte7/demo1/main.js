{


    function init() {
        $(".parpadear").parpadea();

        //añado un evento clic para un botón, para que al pulsarlo parpadeen los elementos de clase parpadear
        $("#botonparpadear").click(function () {
            $(".parpadear").parpadea();
        })
    }

    $(init);


}