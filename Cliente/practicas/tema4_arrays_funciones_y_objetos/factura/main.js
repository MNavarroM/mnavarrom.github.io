/**
 * @author Mario Navarro Madrid
 */
{

    function init() {
        let elementos = [new Elemento("Patatas campesinas", 0.90, "Irresistibles patatas sabor campesinas", 3),
        new Elemento("Pan", 0.60, "Pan de horno de piedra", 3),
        new Elemento("Jamón Serrano", 70.95, "Jamón de pata negra, del güeno güeno", 2)];
        let factura = new Factura("Peter Parker", "C/ de la Araña, 20","689547444","89658745S",elementos);
        factura.imprimirFactura();
        console.log(factura.informacion);

    }

    function Factura(nombre, direccion, telefono, cif, elementos) {
        this.cliente = new Cliente(nombre, direccion, telefono, cif);
        this.elementos = elementos;
        this.base = 0;
        this.total = 0;
    }

    Factura.prototype.numero = 0;

    Factura.prototype.datosEmpresa = {
        nombre : "Supermercados Navarro",
        telefono : 666666666,
        direccion : "C/ Arcos de la frontera S/N",
        cif : "00000000N"
    }

    Factura.prototype.calcularTotal = function(){
        this.elementos.forEach(element => {
            this.informacion.base += element.precio * element.cantidad;
        });
        this.informacion.total = this.informacion.base * this.informacion.iva;
    }

    Factura.prototype.imprimirFactura = function () {
        let info = document.getElementById("info");
        this.elementos.forEach(element => {
            info.innerHTML += element.nombre + " - " + element.descripcion + " - " + element.precio + " - Cantidad: " + element.cantidad + "</br>";
        });
        this.calcularTotal();
        info.innerHTML += "Total sin IVA:" + this.informacion.base + "-------" + " Total: " + this.informacion.total;
    }

    function Cliente(nombre, direccion, telefono, cif) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
        this.cif = cif;
    }

    function Elemento(nombre, precio, descripcion, cantidad, iva) {
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
        this.cantidad = cantidad;
        this.iva = iva;
    }

    document.addEventListener("DOMContentLoaded",init);

}