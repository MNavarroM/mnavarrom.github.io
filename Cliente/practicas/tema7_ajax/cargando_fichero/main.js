$(function() {
  get("index2.html");
  $("button").mousedown(function() {
    get($("#cajaTexto").val());
    $("#codigoPeticion").html("");
  });
});

function get($url) {
  $.get($url, function(data, textStatus, jqXHR) {
    let estados = "";
    $("#pagina").text(data);
  }).done(function(data, textStatus, jqXHR) {
    $("#descripcionRespuesta").text(jqXHR.statusText);
    $("#codigoRespuesta").text(jqXHR.status);
    $("#codigoPeticion").append("Done<br/>");
    console.log(jqXHR.readyState)
  }).fail(function (data, textStatus, jqXHR) {
    $("#descripcionRespuesta").text("404");
    $("#codigoRespuesta").text("Not Found");
    $("#codigoPeticion").append("Fail<br/>");
    $("#pagina").text("");
    console.log(jqXHR.readyState)
  }).always(function(data, textStatus, jqXHR) {
    $("#descripcionRespuesta").text(jqXHR.statusText);
    $("#codigoRespuesta").text(jqXHR.status);
    $("#codigoPeticion").append("Always<br/>");
    console.log(jqXHR.readyState)
  });
}
