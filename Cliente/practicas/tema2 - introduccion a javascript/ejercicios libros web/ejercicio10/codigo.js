/**Definir una función que determine si la cadena de texto que se le pasa como parámetro es
 * un palíndromo, es decir, si se lee de la misma forma desde la izquierda y desde la derecha.
 * Ejemplo de palíndromo complejo: "La ruta nos aporto otro paso natural".
 * @author Mario Navarro Madrid
 */
{

    function esPolindramo(frase){
        let frase1 = frase.split(" ");
        let frase2 = frase.split(" ").reverse();
        let iguales = true;
        for(i in frase){
            if(frase1[i] != frase2[i])
               iguales=false;
        }
        if(iguales==true)
            document.getElementById("message").textContent = "La frase " + frase + " es un políndramo.";
        else
            document.getElementById("message").textContent = "La frase " + frase + " no es un políndramo.";
    }

    function init() {
        let frase = prompt("Introduce una frase").toLowerCase();
        esPolindramo(frase);
    }

    window.addEventListener("load",init);

}