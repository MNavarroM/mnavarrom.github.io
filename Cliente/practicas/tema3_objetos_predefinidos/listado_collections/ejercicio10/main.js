/**
 * Crea mediante iterables estos dos objetos collections. Indica el número de elementos de cada uno. 
 * Justifica el comportamiento:
 * b = new WeakSet([{}, {}]);
 * o = {}; a = new WeakSet([o, o]);
 * @author Mario Navarro Madrid
 */
{
    function init() {
        mostrarInfo();
    }

    function mostrarInfo() {
        let b = new WeakSet([{}, {}]);
        let o = {};
        let a = new WeakSet([o, o]);
        console.log(b);
        console.log(a);
    }

    document.addEventListener("DOMContentLoaded",init);
}