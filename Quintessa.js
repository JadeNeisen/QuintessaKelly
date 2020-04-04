$(document).ready(function() {
  $("#aboutButton").on("click", function() {
    $("#about").show();
    $("#gallery").hide();
    $("#contact").hide();
    $("#about").toggleClass("active");
  });
});

$(document).ready(function() {
  $("#galleryButton").on("click", function() {
    $("#gallery").show();
    $("#about").hide();
    $("#contact").hide();
    $("#gallery").toggleClass("active");
  });
});

$(document).ready(function() {
  $("#contactButton").on("click", function() {
    $("#contact").show();
    $("#gallery").hide();
    $("#about").hide();
    $("#contact").toggleClass("active");
  });
});
