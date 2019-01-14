{
  let btnAdd,imgAdd, btnExit;
  let modal;
  let showMenu;


  $(document).ready(function () {
    btnAdd = $("#btnHelp");
    btnExit = $("#btnCancel");
    modal = $("#modal");
    showMenu = $("#menu");
    nav = $("nav");
    $("#bienvenida h2").fadeOut();
    $("#bienvenida h2").fadeIn(2500);
    $("#bienvenida button").fadeOut();
    $("#bienvenida button").fadeIn(2500);
  
    btnAdd.click(function (e) { 
      modal.fadeIn();
    });
    btnExit.click(function (e) { 
      modal.fadeOut();
    });
    showMenu.click(function (e) { 
      nav.fadeIn(100);
    });



  });
}
