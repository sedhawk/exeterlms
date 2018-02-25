
$(document).ready(function() {
    $("#driver").click(function(event) {
      $("#stage").load("info.html");
    });
    $("#driver").click(function(event) {
      $("#stage1").load("footer.html");
    });
    $("#driver2").click(function(e){
      e.preventDefault();
    $("#driver1").attr('src', "../../../images/albert-einstein.jpg");
  });
});