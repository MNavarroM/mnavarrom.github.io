/**Crea  una función que cree un array de la dimensión indicada, cuyo contenido sean los números
 * naturales comenzando desde 0
 * @author Mario Navarro Madrid
 */
{
    function init() {
        document.getElementById("button").addEventListener("click",createArray);
    }

    function createArray() {
        let nums = [];
        let msg ="";
        for (let i = 0; i < document.getElementById("dimArray").value; i++) {
            nums[i] = i;
        }
        nums.forEach(element => {
            msg += element +" ";
        });
        document.getElementById("info").innerHTML = msg;
    }

    document.addEventListener("DOMContentLoaded",init);
}