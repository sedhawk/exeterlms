/*\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
 * Name: Don Speer
 * Project: Hands:On Project lesson 7
 * Purpose: JQuery Practice
 * Date: February 13, 2018
 *\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*/

// PART 1
// uses dblclick() to change the CSS color to blue on the h1 tag. The other will change the font size on hover
$(document).ready(function(){    
    $("h1").dblclick(function(){
		$(this).css("color", "blue");
 	});
 });

 $(document).ready(function(){
    $("h1").hover(function(){
        $(this).css("font-size", '72px');
    });
});
