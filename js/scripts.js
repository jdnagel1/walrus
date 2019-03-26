$(document).ready(function() {
  $(".clickable").click(function() {
    $("#initially-showing").fadeToggle();
    
  });

  $(".clickable").click(function() {
    $("#initially-hidden").fadeToggle();
  });
});
