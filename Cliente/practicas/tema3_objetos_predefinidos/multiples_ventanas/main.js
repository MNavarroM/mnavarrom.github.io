    /**Crea la siguiente página Web donde el botón crea cinco nuevas ventanas ubicadas en
     * la esquina tal y como se muestran.
     * Métodos a utilizar:
     * miVentana = window.open('','','width=200,height=200');
     * miVentana.document.open();
     * miVentana.document.write();
     * Añade el esqueleto básico: html, head, title, body, ul...
     * miVentana.document.close();
     * @author Mario Navarro Madrid
     */

    {

        function openWindow() {
            let top = 0;
            let left = 0;
            for (let i = 0; i < 5; i++) {
                let ventana = window.open("", "", "width=300,height=200,top=" + top + ",left=" + left);
                ventana.document.write(
                    "<html>" +
                    "<head>" +
                    "<title>Ventana " + i + "</title>" +
                    "<script src=window.js></script>" +
                    "</head>" +
                    "<body>" +
                    "Ventana " + i +
                    "<button id=closeWindow>Close window</button>" + 
                    "</body>" +
                    "</html>");
                    ventana.document.close();
                top += 20;
                left += 20;
            }
        }

        function init() {
            let button = document.getElementById("openWindow");
            button.addEventListener('click', openWindow);
        }
        document.addEventListener("DOMContentLoaded", init)

    }