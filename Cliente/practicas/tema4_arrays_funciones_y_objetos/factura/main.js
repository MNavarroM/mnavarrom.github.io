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
        document.getElementById("crearFactura").addEventListener("click",crearFactura);
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
    }

    function crearCliente() {
        let nombre = document.getElementById("nombreCliente").value;
        let direccion = document.getElementById("direccionCliente").value;
        let tlf = document.getElementById("tlfCliente").value;
        let cif = document.getElementById("cifCliente").value;
        if(nombre == "" || nombre == "" || nombre == "" || nombre == "")
            throw new Error("Debes rellenar todos los campos del cliente");
        return new Cliente(nombre, direccion, tlf, cif);
    }

    function addElementos() {
        for (let i = 1; i < tabla.rows.length; i++) {
            //console.log("pasando por " + i);
            let optionSelected = tabla.rows[i].cells[3].childNodes[0];
            elementos.push(new Elemento(tabla.rows[i].cells[0].childNodes[0].value,
                tabla.rows[i].cells[1].childNodes[0].value,
                tabla.rows[i].cells[2].childNodes[0].value,
                optionSelected.options[optionSelected.selectedIndex].value
                ));
        }
    }

    function crearFactura() {
        addElementos();
        factura = new Factura(crearEmpresa(),crearCliente(),elementos);
        factura.calcularTotal();
        console.log(factura);
        let ventanaFactura = window.open("","Factura");
        ventanaFactura.factura;
        ventanaFactura.factura = factura;
        ventanaFactura.document.write(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <script src="Factura.js"></script>
            <script src="Cliente.js"></script>
            <script src="Empresa.js"></script>
            <script src="Elemento.js"></script>
            <script src="main.js"></script>
            <title>Factura</title>
        </head>
        <body>
            <div>
                <h3>Tus datos.</h3>
                <p><span>Nombre: </span>${factura.empresa.nombre}  <span>CIF: </span>${factura.empresa.cif}</p>
                <p><span>Dirección: ${factura.empresa.direccion}  </span><span>Teléfono: ${factura.empresa.telefono}</span></p>
            </div>
            <div id="datosCliente" style="display:inline-block;">
            <p><span>Nombre: </span>${factura.cliente.nombre}  <span>CIF: </span>${factura.cliente.cif}</p>
            <p><span>Dirección: ${factura.cliente.direccion}  </span><span>Teléfono: ${factura.cliente.telefono}</span></p>
            </div>
            <div id="refs">
                <table id="tabla">
                    <tr>
                        <th>Descripción</th>
                        <th>Unidades</th>
                        <th>Precio</th>
                        <th>Iva</th>
                    </tr>`);
        let tabla = ``;
        elementos.forEach(element => {
            tabla += `<tr>
            <td>${element.descripcion}</td>
            <td>${element.cantidad}</td>
            <td>${element.precio}</td>
            <td>${element.iva}</td>
            </tr>
            `;
        });
        ventanaFactura.document.writeln(tabla);
        ventanaFactura.document.writeln(`
        </table>
            </div>
            <p id="error"></p>
                <p style="text-align:right;">
                <p >Precio base: ${factura.base}</p>
                <p >IVA ${(factura.ivasAcumulados.general + factura.ivasAcumulados.reducido + factura.ivasAcumulados.superreducido).toFixed()}</p>
                <p >Total: ${factura.total} </p>
            </p>
        </body>
        </html>`);
        ventanaFactura.document.close();
    }

    function mostrarFactura() {

    }

    document.addEventListener("DOMContentLoaded", init);

}