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
    $("#bienvenida h2").hide();
    $("#bienvenida h2").fadeIn(3000);
    $("#bienvenida button").hide();
    $("#bienvenida button").show(3000);

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
