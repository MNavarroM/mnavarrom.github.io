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

    let colorInicial = $("input[type=text]").css("color");
    let borderInicial = $("input[type=text]").css("border");
    let fondoInicial = $("input[type=text]").css("backgroundColor");

    $.fn.validadorFormularios = function (options) {
        let inputError = [];
        let estilosError = {
            color: "#ff0000",
            border: "border 2px solid #ffD3D7",
            backgroundColor : "#ffDEDE"
        }
        $.extend(estilosError,options);
        $("input[type=text]",$(this)).blur(function (e) {
            e.preventDefault();
            let tipoRegex = $(this).attr("tipo");
            let valor = $(this).val();
            if (!validador.validarRegex(valor, tipoRegex)) {
                $(this).css(estilosError);
                inputError.push($(this));
            }else{
                $(this).css({
                color: "green",
                border: "border 2px solid black",
                backgroundColor : "white"
                });
            }
        });

        $("input[type=text]",$(this)).focus(function (e) {
            e.preventDefault();
            $(this).css({
                color: colorInicial,
                border: borderInicial,
                backgroundColor: fondoInicial
              });
        });

        $(this).submit(function (e) {
            e.preventDefault();
            inputError = [];
            let $inputs = $("input[type=text]",$(this));
            $inputs.blur();
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
