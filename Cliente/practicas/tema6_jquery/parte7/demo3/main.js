{


    function init() {
        $("#elemento1").creaTip("todo bien...");
        $("#elemento2").creaTip("Otra prueba...", {
            velocidad: 1000,
            claseTip: "otroestilotip",
            animacionMuestra: {
                opacity: "show",
                padding: '25px',
                'font-size': '2em'
            },
            animacionOculta: {
                height: "hide",
                padding: '5px',
                'font-size': '1em'
            }
        });
    }

    $(init);


}