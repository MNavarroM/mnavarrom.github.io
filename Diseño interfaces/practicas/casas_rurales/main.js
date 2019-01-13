{
  let btnAdd,imgAdd, btnExit;
  let modal;
  let notas;

  function init() {

    btnAdd = document.getElementById("btnHelp");
    btnExit = document.getElementById("btnCancel");
    modal = document.getElementById("modal");
    btnAdd.addEventListener("click", function() {
      modal.style.display = "block";
    });

    btnExit.addEventListener("click", function() {
      modal.style.display = "none";
    });
  }

  document.addEventListener("DOMContentLoaded", init);
}
