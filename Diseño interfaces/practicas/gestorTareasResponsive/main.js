{
  let btnAdd,imgAdd, btnExit;
  let modal;
  let notas;

  function init() {
    /*notas = document.getElementsByClassName("nota");
    arrayNotas = Array.from(notas);
    console.log(notas);
    for (let i = 0; i < arrayNotas.length; i++) {
        notas[i].addEventListener("click",function () {
            notas.removeChild(notas.childNodes[i]);
        })
    }*/
    btnAdd = document.getElementById("btnNota");
    btnExit = document.getElementById("btnCancel");
    imgAdd = document.getElementById("add");
    modal = document.getElementById("modal");
    btnAdd.addEventListener("click", function() {
      modal.style.display = "block";
    });
    imgAdd.addEventListener("click", function() {
      modal.style.display = "block";
    });
    btnExit.addEventListener("click", function() {
      modal.style.display = "none";
    });
  }

  document.addEventListener("DOMContentLoaded", init);
}
