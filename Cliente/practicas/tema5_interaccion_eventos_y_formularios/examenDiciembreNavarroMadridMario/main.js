{
    /**
     * @author Mario Navarro Madrid
     */

    let nombre,email,fechaLlegada,horaLlegada,numNoches,numPersonas,servicioRestaurante,edadCliente;
    let errNombre,errEmail,errFechaLlegada,errHoraLlegada,errNumNoches,errnumPersonas,errservicioRestaurante,errEdadCliente;
    let submit;
    let inputs;
    let spans;
    let radioEdad,checkBoxServicio;
    let inputsNoValidos = [];
    let valoresReserva = [];


    let validador = {
        nombre: [/^([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\']+[\s])+([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])+[\s]?([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])?$/,
        "El nombre debe tener al menos tres carácteres y un apellido."],
        fechaLlegada : [/^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/,"La fecha no cumple el formato dd-mm-yyyy"],
        email: [/^[^áéíóúÁÉÍÓÚ ()<>@,;:"\[\]\.ç%&]+@[^áéíóúÁÉÍÓÚ ()<>@,;:"\[\]\.ç%&]+\.[^áéíóúÁÉÍÓÚ ()<>@,;:"\[\]\.ç%&]{2,4}$/
        ,"El email no cumple el formato xxxxxx@xxxx.xxx"],
        horaLlegada : [/^[0-9]{2}:[0-9]{2}$/, "La hora no cumple el formato XX:XX"],
        validarRegex(valor,expresion) {
            if(!validador[expresion][0].test(valor))
                return validador[expresion][1];
            if(expresion=="fechaLlegada"){
                let [dia,mes,ano] = valor.split("/");
                if(dia>31)
                    return "El día no puede ser mayor a 31";
                else if(mes>12)
                    return "El mes no puede ser mayor a 12";
                let fechaIntroducida = new Date(mes+"/"+dia+"/"+ano);
                let fechaActual = new Date();
                if(fechaIntroducida.getTime()<fechaActual.getTime())
                    return "Debes seleccionar una fecha superior a hoy";
            }
            else if(expresion=="horaLlegada"){
                let [horas,minutos] = valor.split(":");
                if(horas>23)
                    return "No puedes seleccionar una hora superior a 23";
                else if(minutos>59)
                    return "No puedes seleccionar más de 50 minutos";
            }
            return "";
        },
        validarNumerico(valor){
            if(isNaN(valor))
                return "Debes introducir un valor numérico";
            return "";
        }
    }

    function init() {
        inputs = document.querySelectorAll('input[type="text"]');
        checkBoxServicio = document.querySelectorAll("input[type=checkbox]");
        radioEdad = document.querySelectorAll("input[type=radio]");
        spans = document.getElementsByTagName("span");
        submit = document.getElementById("enviar");
        submit.addEventListener("click",enviar);
        inputs.forEach(element => {
            if(element.id!=("enviar")){
                element.addEventListener("blur",function () {
                    validar(element);
                });
            }
        });
    }

    function validar(element) {
        let id = element.getAttribute("id");
        let span = document.getElementById("err"+id);
        if(element.value=="")
            span.innerHTML = "El valor no puede esta vacío";
        else if(id==="numNoches" || id==="numPersonas")
            span.innerHTML = validador.validarNumerico(element.value);
        else
            span.innerHTML = validador.validarRegex(element.value,element.getAttribute("id"));
        if(span.textContent !== "")
            inputsNoValidos.push(element);
        
            

    }

    function enviar() {
        inputsNoValidos = [];
        inputs.forEach(input => {
            validar(input);
        });
        console.log(inputsNoValidos);
        if(inputsNoValidos.length>0)
            inputsNoValidos[0].focus();
        else
            crearReserva();
    }

    function crearReserva() {
        let servicios = "";
        inputs.forEach(element => {
            valoresReserva.push(element.value);
        });
        checkBoxServicio.forEach(element => {
            if(element.checked)
                servicios+= " "+element.value + " ";
        });
        valoresReserva.push(servicios);
        radioEdad.forEach(element => {
            if(element.checked)
                valoresReserva.push(element.value);
        });
        let ventana = open("","","height=400px;width=300px");
        let reserva = new Reserva(valoresReserva[0],valoresReserva[1],valoresReserva[2],valoresReserva[3],valoresReserva[4],
            valoresReserva[5],valoresReserva[6],valoresReserva[7]);
        
        ventana.reserva = reserva;
        ventana.document.open();
        ventana.document.write(`<!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Reserva de ${reserva.nombre}</title>
        </head>
        <body>
            <p>Id reserva: ${reserva.idReserva}<p>
            <p>Fecha de llegada: ${reserva.fechaLlegada}<p>
            <p>Nombre cliente: ${reserva.nombre}<p>
            <p>Correo cliente: ${reserva.email}<p>
            <p>Hora de llegada: ${reserva.horaLlegada}<p>
            <p>Nº de noches: ${reserva.numNoches}<p>
            <p>Nº de personas: ${reserva.numPersonas}<p>
            <p>Servicio de restaurante: ${reserva.servicioRestaurante}<p>
            <p>Edad del cliente: ${reserva.edadCliente}<p>
            <p>Quedan ${reserva.calcularDiasRestante()} días para su entrada</p>
        </body>
        </html>`);
        ventana.document.close();

    }

    document.addEventListener("DOMContentLoaded",init);

}