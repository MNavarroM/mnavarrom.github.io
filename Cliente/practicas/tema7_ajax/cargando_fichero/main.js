$(function() {
  get("index2.html");
  $("button").mousedown(function() {
    get($("#cajaTexto").val());
  });
});

function get($url) {
  $.get($url, function(data, textStatus, jqXHR) {
    $("#pagina").text(data);
  }).always(function(data, textStatus, jqXHR) {
    $("#descripcionRespuesta").text(jqXHR.statusText);
    $("#codigoRespuesta").text(jqXHR.status);
    $("#descripcionPeticion").text(textStatus);
    $("#codigoPeticion").text(jqXHR.readyState);
  }).fail(function () {
    $("#descripcionRespuesta").text("404");
    $("#codigoRespuesta").text("Not Found");
    $("#descripcionPeticion").text(textStatus);
    $("#codigoPeticion").text(jqXHR.readyState);
  });
}
