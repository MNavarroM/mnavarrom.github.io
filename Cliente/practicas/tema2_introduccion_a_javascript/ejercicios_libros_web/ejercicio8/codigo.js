/**Escribir el código de una función a la que se pasa como parámetro un número entero y
 * devuelve como resultado una cadena de texto que indica si el número es par o impar.
 * Mostrar por pantalla el resultado devuelto por la función.
 * @author Mario Navarro Madrid
 */

{
    function init() {
        let number = prompt("Introduce un número");

        let p1 = document.getElementById("number");
        let p2 = document.getElementById("message");

        p1.textContent = "El número es " + number;
        p2.textContent = esPar(number);
    }

    function esPar(number) {
        if(number%2==0)
            return "El número es par"
        return "El número es impar"
    }

    window.addEventListener("load",init);
}