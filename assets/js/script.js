$(document).ready(function () {
  $("#enviarCorreo").click(function () {
    alert("El correo fue enviado correctamente...");
  });

  $("h6").dblclick(function() {
    $(this).toggleClass( "text-danger" );
  });

  $(".card-title").click(function () {
    $(".card-text").toggle();
  });

  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
  

});

