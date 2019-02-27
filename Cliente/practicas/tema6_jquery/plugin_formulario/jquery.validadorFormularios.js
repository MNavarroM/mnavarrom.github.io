(function ($) {
    let validador = {
        nombre: [/^([a-zA-Z]{3,}\s?)$/,
            "El nombre debe tener al menos tres carácteres."
        ],
        apellidos: [/^([a-zA-Z]{3,}\s?){1,3}$/,
            "Debes introducir al menos un apellido de tres carácteres."
        ],
        email: [/^[^áéíóúÁÉÍÓÚ ()<>@,;:"\[\]\.ç%&]+@[^áéíóúÁÉÍÓÚ ()<>@,;:"\[\]\.ç%&]+\.[^áéíóúÁÉÍÓÚ ()<>@,;:"\[\]\.ç%&]{2,4}$/, "El email no cumple el formato xxxxxx@xxxx.xxx"],

        validarRegex(valor, expresion) {
            if (!validador[expresion][0].test(valor))
                return false;
            return true;
        },
    }

    $.fn.validadorFormularios = function (options) {
        let inputError = [];    
        let estilos = {
            color: "#DB222A",
            border: "1px solid #DB222A"
        }
        $.extend(estilos,options);
        $("input[type=text]").blur(function (e) {
            e.preventDefault();
            console.log($(this));
            let tipoRegex = $(this).attr("tipo");
            let valor = $(this).val();
            if (validador.validarRegex(valor, tipoRegex)) {
                $(this).css({
                    color: "green",
                    border: "1px solid green"
                });
            } else {
                $(this).css(estilos);
                inputError.push($(this));
            }
        });

        $("input[type=text]").focus(function (e) {
            e.preventDefault();
            $(this).css({
                border: "2px solid #ffD3D7"
            });
        });

        $(this).submit(function (e) {
            e.preventDefault();
            inputError = [];
            let $inputs = $("input[type=text]");
            $inputs.blur();
            console.log(inputError);
            if (inputError.length > 0){
                inputError[0].focus();
                $("textarea").val("");
            }
            else {
                $.get("info.txt",
                    function (data) {
                        $("textarea").val(data);
                    },
                );
            }
        });
    }
        return this;
    }(jQuery));
