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

    $.fn.validadorFormularios = function () {
        let inputError = [];
        $("input[type=text]").blur(function (e) {
            e.preventDefault();
            let tipoRegex = $(this).attr("tipo");
            let valor = $(this).val();
            if (validador.validarRegex(valor, tipoRegex)) {
                $(this).css({
                    color: "green",
                    border: "1px solid green"
                });
            } else {
                $(this).css({
                    color: "red",
                    border: "1px solid red"
                });
                inputError.push($(this));
            }
        });

        $("input[type=text]").focus(function (e) {
            e.preventDefault();
            $(this).css({
                color: "black",
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
                $.ajax({
                    url: "info.txt",
                    dataType: "text",
                    success: function (response) {
                        $("textarea").val(response);
                    }
                });
            }
        });
    }
        return this;
    }(jQuery));