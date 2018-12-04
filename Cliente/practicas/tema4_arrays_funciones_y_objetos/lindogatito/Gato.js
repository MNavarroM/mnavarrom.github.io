{

    function Gato(nombre, peso, raza, fechanacimiento) {
        this.setNombre(nombre);
        this.setPeso(peso);
        this.setRaza(raza);
        this.setFechaNacimiento(fechanacimiento);
        this.vivo = true;
    }

    Gato.prototype.comer = function () {
        if(this.vivo){
            ++this.peso;
            if(this.peso > 15)
                this.vivo = false;
        }

    }

    Gato.prototype.jugar = function () {
        if(this.vivo){
            --this.peso;
            if(this.peso <= 0)
                this.vivo = false;
        }
    }

    Gato.prototype.dormir = function () {

    }

    Gato.prototype.garrotillo = function () {
        this.peso = 0;
        this.vivo = false;
    }

    Gato.prototype.setNombre = function (nombre) {
        if(nombre === "" || nombre === " ")
            throw new Error("Debes introducir un nombre");
        this.nombre = nombre;
    }

    Gato.prototype.setRaza = function (raza) {
        if(raza === "" || raza === " ")
            throw new Error("Debes introducir una raza");
        this.raza = raza;
    }

    Gato.prototype.setPeso = function (peso) {
        if(peso<=0 ||peso>15)
            throw new Error("El peso debe estar entre 1 y 15");
        this.peso = peso;
    }

    Gato.prototype.setFechaNacimiento = function (fechanacimiento) {
        if(fechanacimiento=="" || new Date(fechanacimiento) >= new Date())
            throw new Error("Introduce una fecha válida");
        this.fechanacimiento = fechanacimiento;
    }

    Gato.prototype.getPeso = function () {
        return this.peso;
    }

    Gato.prototype.calcularEdad = function () {
        let fechaActual = new Date();
        let fechaCumpleaños = new Date(this.fechanacimiento);
        let edad = fechaActual.getFullYear() - fechaCumpleaños.getFullYear();
        if(fechaActual.getMonth()<fechaCumpleaños.getMonth() ||
            (fechaCumpleaños.getMonth()==fechaActual.getMonth() && fechaCumpleaños.getDate()<fechaActual.getDate()))
                --edad;
        return edad;
    }
    

}