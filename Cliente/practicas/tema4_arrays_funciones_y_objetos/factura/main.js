/**
 * @author Mario Navarro Madrid
 */
{
    let elementos = [];
    let contadorLineas = 1;
    let tabla;
    let empresa, cliente;
    let factura;

    function init() {
        tabla = document.getElementById("tabla");
        document.getElementById("addLinea").addEventListener("click", nuevaLinea);
        /*document.getElementById("crearFactura").addEventListener("click", function () {
            crearEmpresa();
            crearCliente();
            console.log(empresa);
            console.log(cliente);
        });*/
        document.getElementById("crearFactura").addEventListener("click",isEmpty);
    }

    function nuevaLinea() {
        if (!isEmptyLast()) {
            let linea = document.createElement("tr");
            let td, input, option;
            for (let i = 0; i < 4; i++) {
                td = document.createElement("td");
                switch (i) {
                    case 0:
                        input = document.createElement("input");
                        input.type = "text";
                        break;
                    case 3:
                        input = document.createElement("select");
                        for (let j = 0; j < 3; j++) {
                            switch (j) {
                                case 0:
                                    option = document.createElement("option");
                                    option.text = "Superreducido - 4%";
                                    option.value = 0.04;
                                    break;
                                case 1:
                                    option = document.createElement("option");
                                    option.text = "Reduccido - 10%";
                                    option.value = 0.1;
                                    break;
                                case 2:
                                    option = document.createElement("option");
                                    option.text = "General - 21%";
                                    option.value = 0.21;
                                    break;
                            }
                            input.appendChild(option);
                        }
                        break;
                    default:
                        input = document.createElement("input");
                        input.type = "number";
                        break;
                }

                td.appendChild(input);
                linea.appendChild(td);
            }
            tabla.appendChild(linea);
        }
        ++contadorLineas;
    }

    function isEmptyLast() {
        if (tabla.rows[contadorLineas].cells[0].childNodes[0].value == "" || tabla.rows[contadorLineas].cells[1].childNodes[0].value == "" ||
            tabla.rows[contadorLineas].cells[2].childNodes[0].value == "") {
            throw new Error("Debes rellenar la información antes de añadir.");
        } else
            return false;
    }

    function isEmpty() {
        for (let i = 0; i < contadorLineas; i++) {
            if(tabla.rows[1+i].cells[0].childNodes[0].value == "" || tabla.rows[1+i].cells[1].childNodes[0].value == "" ||
            tabla.rows[1+i].cells[2].childNodes[0].value == "" || tabla.rows[1+i].cells[3].childNodes[0].value == "")
                throw new Error("Debes rellenar la información de las líneas");
        }
    }

    function crearEmpresa() {
        let nombre = document.getElementById("nombreEmpresa").value;
        let direccion = document.getElementById("direccionEmpresa").value;
        let tlf = document.getElementById("tlfEmpresa").value;
        let cif = document.getElementById("cifEmpresa").value;
        if(nombre == "" || nombre == "" || nombre == "" || nombre == "")
            throw new Error("Debes rellenar todos los campos del cliente");
        return new Empresa(nombre, direccion, tlf, cif);
        //console.log(empresa);
    }

    function crearCliente() {
        let nombre = document.getElementById("nombreCliente").value;
        let direccion = document.getElementById("direccionCliente").value;
        let tlf = document.getElementById("tlfCliente").value;
        let cif = document.getElementById("cifCliente").value;
        if(nombre == "" || nombre == "" || nombre == "" || nombre == "")
            throw new Error("Debes rellenar todos los campos del cliente");
        return new Cliente(nombre, direccion, tlf, cif);
        //console.log(cliente);
    }

    function addElementos() {
        /*let descripcion = tabla.rows[contadorLineas].cells[0].childNodes[0].value;
        let precio = tabla.rows[contadorLineas].cells[1].childNodes[0].value;
        let cantidad = tabla.rows[contadorLineas].cells[2].childNodes[0].value;
        if(descripcion == undefined || precio == undefined || cantidad == undefined){
            throw new Error("Rellena la línea antes de añadir otra");
        }
        let optionSelected = tabla.rows[contadorLineas].cells[3].childNodes[0];
        let iva = optionSelected.options[optionSelected.selectedIndex].value;
        console.log(new Elemento(descripcion,precio,cantidad,iva));
        elementos.push(new Elemento(descripcion,precio,cantidad,iva));*/
        for (let i = 1; i < tabla.rows.length; i++) {
            console.log("pasando por " + i);
            let optionSelected = tabla.rows[i].cells[3].childNodes[0];
            elementos.push(new Elemento(tabla.rows[i].cells[0].childNodes[0].value,
                tabla.rows[i].cells[1].childNodes[0].value,
                tabla.rows[i].cells[2].childNodes[0].value,
                optionSelected.options[optionSelected.selectedIndex].value
                ));
        }
        //console.log(elementos);
    }

    function crearFactura() {
        addElementos();
        factura = new Factura(crearEmpresa(),crearCliente(),elementos);
        factura.calcularTotal();
        console.log(factura);
        /*let ventanaFactura = window.open("","Factura");
        ventanaFactura.factura;
        ventanaFactura.factura = factura;
        ventanaFactura.document.write();*/
    }

    function mostrarFactura() {

    }

    document.addEventListener("DOMContentLoaded", init);

}