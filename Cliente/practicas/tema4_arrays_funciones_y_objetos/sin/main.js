/**
 * @author Mario Navarro Madrid
 */
{

    function init() {
        let info = document.getElementById("info");
        let array = [1,2,3,4,5,6,2,4,8,9,2,4,6,7,1,2,4,2,2,3,6];
        info.innerHTML = array.sin(2);
    }

    Array.prototype.sin = function (sin) {
        let arrayDevuelto = [];
        this.forEach(element =>{
            if(element!=sin)
                arrayDevuelto.push(element);
        });
        return arrayDevuelto;
    }

    document.addEventListener("DOMContentLoaded",init);

}