$(document).ready(function() {
    $("#driver").click(function(event) {
      $("#stage").load("info.html");
    });
    $('.toggle').click(function(e){
      e.preventDefault();
    $("#driver1").attr('src', "../../../images/albert-einstein.jpg");
  });
});