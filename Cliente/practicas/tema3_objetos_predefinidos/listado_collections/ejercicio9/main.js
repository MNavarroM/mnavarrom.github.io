/**Entrega un código (debidamente comentado) donde demuestres los apartados del ejercicio anterior sobre la collection WeakSet.
 * Para ello utiliza como elementos los nombres y apellidos de cinco compañeros de clase.
 * @author Mario Navarro Madrid
 */
{
    function init() {
        mostrarWeak();
    }

    function mostrarWeak() {
        //Creamos el WeakSet
        let alumnos = new WeakSet();
        //Creamos los alumnos y los metemos en el WeakSet
        let mario = {nombre: "Mario", apellido: "Navarro"};
        let guillermo = {nombre: "Guillermo", apellido: "Boquizo"};
        let angelo = {nombre: "Angelo", apellido: "Barbara"};
        let marcos = {nombre: "Marcos", apellido: "Gallardo"};
        alumnos.add(mario);
        alumnos.add(guillermo);
        alumnos.add(angelo);
        alumnos.add(marcos);
        //Obtenemos el elemento info
        let info = document.getElementById("info");
        //Mostramos información en elemento info
        info.innerHTML = `Compruebo que exista el alumno mario con alumnos.has(mario) </br>
            ¿Existe el alumno mario? ${alumnos.has(mario)}</br>
            Ahora borro dicho alumno con alumnos.delete(mario) y vuelvo a comprobar si existe.
        `
        ;
        //Eliminamos un alunos
        alumnos.delete(mario);
        //Volvemos a mostrar información
        info.innerHTML+="¿Existe aún el alumno mario? " + alumnos.has(mario);
    }

    document.addEventListener("DOMContentLoaded",init);
}