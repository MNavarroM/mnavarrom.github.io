/**Indica la diferencia entre los siguientes métodos, y demuestra su uso con algunos arrays:
 * Array.prototype.forEach(), Array.prototype.every(), Array.prototype.some() y Array.prototype.filter()
 * @author Mario Navarro Madrid
 */
{

    function init() {
        showInfo();
    }

    function showInfo() {
        let array1 = [1,2,3,4,5];
        let array2 = ["mario","pepe","jesús","patricia"];
        let array3 = [75,44,32,99,67];
        let array4 = [4,6,1,4.5];
        document.getElementById("info").innerHTML =`
            El valor del array1 es ${array1} </br>
            El valor del array2 es ${array2} </br>
            El valor del array3 es ${array3} </br>
            El valor del array4 es ${array4} </br></br>
        `;
        let arrayFilter = array3.filter(value => value>50);
        document.getElementById("info").innerHTML += "Recorremos el array1 con foreach y multiplicando sus valores por dos</br>";
        array1.forEach(function(value){
            document.getElementById("info").innerHTML += value + " por dos :" + (value*=2) + "</br>";
        });
        document.getElementById("info").innerHTML +=`
        El valor del array3 tras filtrar por sus elementos mayores de 50 es ${arrayFilter} </br>
        ¿Contiene el array2 el nombre mario? ${array2.some(value=> value=="mario")} </br>
        ¿El resto de los elementos del array 4 entre 3 es cero? ${array4.every(value=> value%3==0)} </br></br>
    `;
    }

    document.addEventListener("DOMContentLoaded",init);

}