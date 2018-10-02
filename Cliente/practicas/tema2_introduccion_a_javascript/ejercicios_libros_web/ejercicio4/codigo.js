/** A partir del siguiente array que se proporciona:
 * var valores = [true, 5, false, "hola", "adios", 2];
 * 1. Determinar cual de los dos elementos de texto es mayor
 * 2. Utilizando exclusivamente los dos valores booleanos del array, determinar
 * los operadores necesarios para obtener un resultado true y otro resultado false
 * 3. Determinar el resultado de las cinco operaciones matemáticas realizadas
 * con los dos elementos numéricos
 * @author Mario Navarro Madrid
 */
{
    let valores =   [true, 5, false, "hola", "adios", 2];
    //Determina cual de los dos elementos de texto es mayor
    
    if(valores[3]<valores[4])
        alert(valores[4] + " es mayor que " + valores[3]);
    else
        alert(valores[3] + " es mayor que " + valores[4]);
    
    //Utilizando exclusivamente los dos valores booleanos del array, determinar los operadores
    //necesarios para obtener un resultado true y otro resultado false
    alert("Obteniendo resultado " + (valores[0]!=valores[2]) + " utilizando valores[0]!=valores[2]");
    alert("Obteniendo resultado " + (valores[0]==valores[2]) + " utilizando valores[0]==valores[2]");
    
    //Determinar el resultado de las cinco operaciones matemáticas realizadas con los dos elementos numéricos
    alert("Resultado de sumar " + valores[1] + " + " + valores[5] + " es " + (valores[1]+valores[5]));
    alert("Resultado de restar " + valores[1] + " - " + valores[5] + " es " + (valores[1]-valores[5]));
    alert("Resultado de multiplicar " + valores[1] + " * " + valores[5] + " es " + (valores[1]*valores[5]));
    alert("Resultado de dividir de " + valores[1] + " / " + valores[5] + " es " + (valores[1]/valores[5]));
    alert("Resto de dividir " + valores[1] + " / " + valores[5] + " es " + (valores[1]%valores[5]));
}