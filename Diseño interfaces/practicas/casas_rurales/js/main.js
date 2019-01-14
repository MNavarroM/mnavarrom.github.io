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
    btnReservar = $("#btnReservar button");
    $("#bienvenida h2").hide();
    $("#bienvenida h2").fadeIn(3000);
    $("#bienvenida button").hide();
    $("#bienvenida button").show(3000);

    btnReservar.click(function (e) { 
      modal.fadeIn();
    });

    btnAdd.click(function (e) {
      modal.fadeIn();
    });
    btnExit.click(function (e) { 
      modal.fadeOut();
    });
    showMenu.click(function (e) { 
      if(nav.css("display")=="block")
        nav.css("display", "none");
      else
        nav.css("display", "block");
    });



  });
}
