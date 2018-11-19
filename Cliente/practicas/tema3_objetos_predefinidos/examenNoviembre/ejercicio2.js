{
    function init() {
        nombres = new Set();
        document.getElementById("atras").addEventListener("click",function(event) {
            event.preventDefault();
            window.history.back();
        })
        document.getElementById("name").addEventListener("blur",function () {
            try {
                validarNombre();
            } catch (error) {
                if(error instanceof NombreInvalidoException)
                    document.getElementById("error").innerHTML = error.mensaje;
            }
        });
    }

    function validarNombre() {
        //let regex = /^([a-zA-ZÁÉÍÓÚáéíúó]+\s?)([a-zA-ZÁÉÍÓÚáéíúó]+\s?)?,(\s?[a-zA-ZÁÉÍÓÚáéíúó]{1,})$/;
        let regex = /^([a-zA-ZÁÉÍÓÚáéíúó]+\s*[a-zA-ZÁÉÍÓÚáéíúó]*\s*),(\s*[a-zA-ZÁÉÍÓÚáéíúó]{1,})$/;
        let name = document.getElementById("name").value.trim();
        if(regex.test(name)){
            let arrayRegex = regex.exec(name);
            let [,apellidos,nombre] = arrayRegex;
            document.getElementById("nombre").innerHTML = "Nombre: " + nombre;
            document.getElementById("apellido").innerHTML = "Apellidos: " + apellidos;
            document.getElementById("error").innerHTML = "";
            name.value = "";
            if(nombres.has(nombre.trim() + " " + apellidos.trim()))
                throw new NombreInvalidoException("REPETIDO");
            else{
                nombres.add(nombre.trim() + " " + apellidos.trim());
            }
        }else{
            throw new NombreInvalidoException("Error. Formato Correcto: Cuadrado Perfecto,Anacleto");
        }
    }

    function NombreInvalidoException(msg) {
        this.mensaje = msg;
        this.nombre = "NombreInvalidoException"
    }


    document.addEventListener("DOMContentLoaded",init);
}