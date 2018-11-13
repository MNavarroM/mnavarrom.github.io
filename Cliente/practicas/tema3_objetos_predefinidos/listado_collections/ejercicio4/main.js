/**Entrega un código (debidamente comentado) donde demuestres los apartados del ejercicio anterior sobre la collection Map.
 * Para ello utiliza como elementos los nombres y apellidos de cinco compañeros de clase.
 * @author Mario Navarro Madrid
 */
{

    function init() {
        mostrarMap();
    }

    function mostrarMap() {
        //Creamos un array de alumnos con clave/valor
        let arrayAlumnos = [[0,"Jose Rafael Alvarez Espino"],[1,"Mario Navarro Madrid"],[2,"Angelo Barbara"],[3,"Marcos Gallardo Pérez"],[4, "Chema Roldán Romero"]];
        //Creamos un map pasando como parámetro el array anterior
        let map = new Map(arrayAlumnos);
        //Obtenemos el elemento info
        let info = document.getElementById("info");
        //Mostramos información en elemento info
        info.innerHTML = `
            Vamos a recorrer el map de alumnos :</br> ${recorrerMap(map)}</br>
            Tras recorrerlo añadimos otro alumno con map.set(5, "Guillermo Boquizo") y eliminamos otro con map.delete(1)</br>
        `;
        //Añadimos el la posición 5 otro elemento
        map.set(5,"Guillermo Boquizo");
        //Eliminamos el elemento con índice 1
        map.delete(1);
        //Volvemos a mostrar información
        info.innerHTML+=`
            Volvemos a mostrarlo:</br> ${recorrerMap(map)} </br>
            El map tiene ${map.size} elementos </br>
        `
        //Limpiamos el map
        map.clear()
        //Volvemos a mostrar información
        info.innerHTML+=`
        Tras limpiar el map con clear, lo volvemos a mostrar : ${recorrerMap(map)}</br>
        Al estar vacío, no muestra nada.
        `

    }

    function recorrerMap(map) {
        let mensajeAlumnos = "";
        //Recorremos el map obteniendo sus valores
        map.forEach(function(key,value){
            mensajeAlumnos+= value + " : " + key + "</br>";
        })
        return mensajeAlumnos;
    }

    document.addEventListener("DOMContentLoaded",init);
}