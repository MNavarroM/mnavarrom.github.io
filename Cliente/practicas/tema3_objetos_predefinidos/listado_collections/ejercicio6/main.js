/**Entrega un código (debidamente comentado) donde demuestres los apartados del ejercicio anterior sobre la collection Set.
 * Para ello utiliza como elementos los nombres y apellidos de cinco compañeros de clase.
 * @author Mario Navarro Madrid
 */
{
    function init() {
        mostrarSet();
    }

    function mostrarSet() {
        //Creamos un array de alumnos
        let arrayAlumnos = ["Jose Rafael Alvarez Espino","Mario Navarro Madrid","Angelo Barbara","Marcos Gallardo Pérez","Chema Roldán Romero"];
        //Creamos un map pasando como parámetro el array anterior
        let set = new Set(arrayAlumnos);
        //Obtenemos el elemento info
        let info = document.getElementById("info");
        //Mostramos información en elemento info
        info.innerHTML = `
            Vamos a recorrer el Set de alumnos :</br> ${recorrerSet(set)}</br>
            Tras recorrerlo añadimos otro alumno con Set.set("Guillermo Boquizo") y eliminamos otro con Set.delete("Mario Navarro Madrid")</br>
        `;
        //Añadimos un elemento al set
        set.add("Guillermo Boquizo");
        //Eliminamos un elemento del set
        set.delete("Mario Navarro Madrid");
        //Volvemos a mostrar información
        info.innerHTML+=`
            Volvemos a mostrarlo:</br> ${recorrerSet(set)} </br>
            El set tiene ${set.size} elementos </br>
        `
        //Limpiamos el set
        set.clear()
        //Volvemos a mostrar información
        info.innerHTML+=`
        Tras limpiar el set con clear, lo volvemos a mostrar : ${recorrerSet(set)}</br>
        Al estar vacío, no muestra nada.
        `

    }

    function recorrerSet(set) {
        let mensajeAlumnos = "  ";
        //Recorremos el set obteniendo sus valores
        set.forEach(function(value){
            mensajeAlumnos+= "Alumno: " + value + "</br>";
        })
        return mensajeAlumnos;
    }

    document.addEventListener("DOMContentLoaded",init);
}