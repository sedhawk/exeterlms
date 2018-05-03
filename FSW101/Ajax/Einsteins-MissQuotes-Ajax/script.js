var data = [
  {
  src: '../../../images/Einstein.jpeg',
  text: "quote1.html",
  footer: "footer1.html",
  header: "Albert Einstein"
  },
  {
  src: '../../../images/albert-einstein.jpg',
  text: "quote2.html",
  footer: "footer2.html",
  header: "Albert Einstein In Color"
  },
];

var randomIndex = Math.floor(Math.random() * data.length);
var randomData = data[randomIndex];

$(document).ready(function() {
    $("#driver").click(function(event) {
      $("#stage").load("quote1.html");
    });
    $("#driver").click(function(event) {
      $("#stage1").load("footer1.html");
    });
    $("#driver2").click(function(e){
      e.preventDefault();
    $("#driver1").attr('src', randomData.src);
  });
});