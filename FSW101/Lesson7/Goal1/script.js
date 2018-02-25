$(document).ready(function() {
    $("#driver").click(function(event) {
      $("#stage").load("info.html");
    });
    $("#driver2").click(function(e){
      e.preventDefault();
    $("#driver1").attr('src', "../../../images/albert-einstein.jpg");
  });
});