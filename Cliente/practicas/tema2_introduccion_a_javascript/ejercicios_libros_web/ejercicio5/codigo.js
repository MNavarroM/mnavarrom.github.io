/** Completar las condiciones de los if del siguiente script para que los mensajes de los
 * alert() se muestren siempre de forma correcta:
 * var numero1 = 5;
 *  var numero2 = 8;
 *  if(...) {
 * alert("numero1 no es mayor que numero2");
 * }
 * if(...) {
 * alert("numero2 es positivo");
 * }
 * if(...) {
 * alert("numero1 es negativo o distinto de cero");
 * }
 * if(...) {
 * alert("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que
 * numero2");
 * }
 * @author Mario Navarro Madrid
 */

{
    let numero1 = 5, numero2 = 8;
    if(numero2>numero1) {2
    alert("numero1(" +numero1+ ") no es mayor que numero2("+numero2+")");
    }
    if(numero2>0) {
    alert("numero2("+numero2+") es positivo");
    }
    if(numero1!=0) {
    alert("numero1("+ numero1 +") es negativo o distinto de cero");
    }
    if(++numero1<=numero2) {
    alert("Incrementar en 1 unidad el valor de numero1("+numero1+") no lo hace mayor o igual que numero2("+numero2+")");
    }
}