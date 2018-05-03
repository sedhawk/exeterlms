/*\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
 * Name: Don Speer
 * Project: Hands:On Project lesson 7
 * Purpose: JQuery Practice
 * Date: February 13, 2018
 *\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*/

// PART 1, 2, and 3
// Uses dblclick() to change the CSS color to blue on the h1 tag 
// The other will change the font size on hover
// Create a web page that has at least six different elements that are changed 
// with jQuery when you either click, hover, keyup, dblclick, font color,
// font size, background color, font type
$(document).ready(function(){    
   $("#firstDiv").hover(function(){
       $(this).css("background-color", "green");
   }, function(){
       $(this).css("background-color", "blue");
   });

   $("#secondDiv").hover(function(){
       $(this).css("background-color", "green");
   }, function(){
       $(this).css("background-color", "blue");
   });

   $("h1").dblclick(function(){
		$(this).css("color", "blue");
 	});

    $("h1").hover(function(){
        $(this).css("font-size", '72px');
    });


});
