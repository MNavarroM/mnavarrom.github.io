{
    /**
     * @author Mario Navarro Madrid
     */

     function Reserva(nombre, email, fechaLlegada, horaLlegada,
        numNoches, numPersonas, servicioRestaurante, edadCliente) {
         this.setNombre(nombre);
         this.setEmail(email);
         this.setFechaLlegada(fechaLlegada);
         this.setHoraLlegada(horaLlegada);
         this.setNumNoches(numNoches);
         this.setNumPersonas(numPersonas);
         this.setServicioRestaurante(servicioRestaurante);
         this.setEdadCliente(edadCliente);
         this.setIdReserva();
     }

     Reserva.idReserva = 1  ;

     Reserva.prototype.setIdReserva = function () {
         this.idReserva = Reserva.idReserva;
         Reserva.idReserva++;
     }

     Reserva.prototype.setNombre = function (nombre) {
         if(nombre=="")
            throw new Error("El nombre no puede estar vacío");
         this.nombre = nombre;
     }

     Reserva.prototype.setHoraLlegada = function (horaLlegada) {
        if(horaLlegada=="")
            throw new Error("El nombre no puede estar vacío");
        this.horaLlegada = horaLlegada;
    }

     Reserva.prototype.setEmail = function (email) {
        if(email=="")
            throw new Error("El nombre no puede estar vacío");
        this.email = email;
    }

     Reserva.prototype.setFechaLlegada = function (fechaLlegada) {
        if(fechaLlegada=="")
            throw new Error("El nombre no puede estar vacío");
        let [dia,mes,ano] = fechaLlegada.split("/")
        this.fechaLlegada = new Date(mes+"/"+dia+"/"+ano);
    }

    Reserva.prototype.setNumNoches = function (numNoches) {
        if(numNoches=="")
            throw new Error("El nombre no puede estar vacío");
        this.numNoches = numNoches;
    }

    Reserva.prototype.setNumPersonas = function (numPersonas) {
        if(numPersonas=="")
            throw new Error("El nombre no puede estar vacío");
        this.numPersonas = numPersonas;
    }

    Reserva.prototype.setServicioRestaurante = function (servicioRestaurante) {
        this.servicioRestaurante = servicioRestaurante;
    }

    Reserva.prototype.setEdadCliente = function (edadCliente) {
        if(edadCliente=="")
            throw new Error("El nombre no puede estar vacío");
        this.edadCliente = edadCliente;
    }

    Reserva.prototype.calcularDiasRestante = function () {
        return Math.ceil((this.fechaLlegada.getTime() - new Date().getTime())/(1000*60*60*24));
    }

}