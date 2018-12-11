{

    let nombre, errNombre,
    dni ,errDni,
    email ,errEmail,
    fechaNac ,errFechaNac,
    tlf ,errTlf,
    cc ,errCc,
    web ,errWeb,
    acepto, validar;
    let error = false;

    let letrasDNI = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

    patrones = {
        nombre : [/^([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\']+[\s])+([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])+[\s]?([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])?$/,
        "El nombre debe tener al menos tres carácteres y un apellido."],
        dni : [/^([\d]{8})[-\\ ]?([A-Z[^IÑOU])$/,"Introduce un dni con formato válido: 00000000X", "Letra incorrecta"],
        cc : [/[\d]{20}/,"La CC debe tener 20 dígitos"],
        email : [/^[^áéíóúÁÉÍÓÚ ()<>@,;:"\[\]\.ç%&]+@[^áéíóúÁÉÍÓÚ ()<>@,;:"\[\]\.ç%&]+.[^áéíóúÁÉÍÓÚ ()<>@,;:"\[\]\.ç%&]{2,4}$/,"Introduce un email con formato válido: xxx@xxx.xxx"],
        web : [/^((http|https)\:\/\/)?([a-z0-9]+\.)+[a-z]{2,4}$/,"Debes introducir una web con formato correcto: www.misitio.com - https://www.misitio.com - http://www.misitio.com - ftp://www.misitio.com"],
        tlf : [/^(6|7|9)[/\d]{8}$/,"Debes introducir un número con formato correcto: 666666666 - 766666666 - 966666666"],
        fechaNac: [/^(\d{2}[\/ -]){2}\d{4}$/,"Debes introducir una fecha con formato válido: 12/02/2015 - 12 02 2015 - 12-02-2015"]
    };

    function init() {
        nombre =  document.getElementById("nombre");
        errNombre = document.getElementById("errNombre");
        nombre.addEventListener("blur",validarNombre);
        dni = document.getElementById("dni");
        errDni = document.getElementById("errDni");
        dni.addEventListener("blur",validarDni);
        email = document.getElementById("email");
        errEmail = document.getElementById("errEmail");
        email.addEventListener("blur",validarEmail);
        fechaNac = document.getElementById("fechaNac");
        errFechaNac = document.getElementById("errFechaNac");
        fechaNac.addEventListener("blur",validarFechaNac);
        tlf = document.getElementById("tlf");
        errTlf = document.getElementById("errTlf");
        tlf.addEventListener("blur",validarTlf);
        cc = document.getElementById("cc");
        errCc = document.getElementById("errCc");
        cc.addEventListener("blur",validarCc);
        web = document.getElementById("web");
        errWeb = document.getElementById("errWeb");
        web.addEventListener("blur",validarWeb);
        acepto = document.getElementById("acepto");
        acepto.addEventListener("blur",validarCheck);
        info = document.getElementById("info");
        valido = document.getElementById("valido");
        validar = document.getElementById("validar");
        validar.addEventListener("click",validarTodo);
    }

    function validarDni() {
        if(!patrones.dni[0].test(dni.value)){
            error = true;
            errDni.innerHTML = patrones.dni[1];
        }else{
            let arrayDNI = patrones.dni[0].exec(dni.value);
            let numDNI = arrayDNI[1];
            let letraDNI = arrayDNI[2];
            if(letrasDNI[numDNI%23]!=letraDNI){
                errDni.innerHTML = patrones.dni[2];
                
            }
            else{
                error = false;
                errDni.innerHTML = "";
            }
                
        }
    }

    function validarNombre() {
        if(!patrones.nombre[0].test(nombre.value)){
            error = true;
            errNombre.innerHTML = patrones.nombre[1];
        }else{
            error = false;
            errNombre.innerHTML = "";
        }

    }

    function validarEmail() {
        if(!patrones.email[0].test(email.value)){
            error = true;
            errEmail.innerHTML = patrones.email[1];
        }
        else{
            error = false;
            errEmail.innerHTML = "";
        }
            
    }

    function validarFechaNac() {
        if(!patrones.fechaNac[0].test(fechaNac.value)){
            error = true;
            errFechaNac.innerHTML = patrones.fechaNac[1];
        }
        else{
            error = true;
            errFechaNac.innerHTML = "";
        }
            
    }

    function validarTlf() {
        if(!patrones.tlf[0].test(tlf.value)){
            error = true;
            errTlf.innerHTML = patrones.tlf[1];
        }
        else{
            error = false;
            errTlf.innerHTML = "";
        }
            
    }

    function validarCc() {
        if(!patrones.cc[0].test(cc.value)){
            error = true;
            errCc.innerHTML = patrones.cc[1];
        }else{
            error = false;
            errCc.innerHTML = "";
        }
            
    }

    function validarWeb() {
        if(!patrones.web[0].test(web.value)){
            error = true;
            errWeb.innerHTML = patrones.web[1];
        }else{
            error = false;
            errWeb.innerHTML = "";
        }
            
    }

    function validarCheck() {
        if(!acepto.checked){
            error = true;
            info.innerHTML = "Debes aceptar las condiciones";
        }else{
            info.innerHTML = "";
            error = false;
        }
            
    }

    function validarTodo() {
        if(error==true){
            info.innerHTML = "Hay datos incorrectos, revisa el formulario";
            valido.innerHTML = "";
        }else{
            info.innerHTML = "";
            valido.innerHTML = "Todos los datos son correctos, dabuten";
        }

    }

    document.addEventListener("DOMContentLoaded",init);

}