/* Table of Contents
==================================================
# Navigation Height
# Counter
# Progress Bar
# EasyPieChart
# MagnificPopup
# onePageNav
# Sticky Nav
# Mobile Toggle Control
# Ajax gitHubRequest

==================================================
*/

// -------------------------------------------------------------
//  Navigation Height 
// -------------------------------------------------------------

(function() {

    var height = $(window).height();
     $(".menu-one .navbar-nav").innerHeight(height);
    
}());    
           
// -------------------------------------------------------------
//Mobile Toggle Control
// -------------------------------------------------------------

$(function(){ 
    var navMain = $(".collapse");
    navMain.on("click", "a", null, function () {
        navMain.collapse('hide');
    });
});     

// -------------------------------------------------------------
// Progress Bar
// -------------------------------------------------------------

$(document).ready(function () {

    $.each($('div.progress-bar'),function(){
        $(this).css('width', $(this).attr('aria-valuenow')+'%');
    });
    
    // Get the navbar
   var navbar = document.getElementById("navigation");

   // Get the offset position of the navbar
   var sticky = navbar.offsetTop;

   window.onscroll = function() {
     if (window.pageYOffset >= sticky) {
       navbar.classList.add("sticky")
     } else {
       navbar.classList.remove("sticky");
     }
   };

   $(".list-inline-f").hover(function(){
        $(this).css("font-size", "35px");
        }, function(){
        $(this).css("font-size", "15px");
        });

    $(".list-inline-t").hover(function(){
        $(this).css("font-size", "35px");
        }, function(){
        $(this).css("font-size", "15px");
        });

    $(".list-inline-gp").hover(function(){
        $(this).css("font-size", "35px");
        }, function(){
        $(this).css("font-size", "15px");
        });

    $(".list-inline-l").hover(function(){
        $(this).css("font-size", "35px");
        }, function(){
        $(this).css("font-size", "15px");
        });
    
    $(".list-inline-gh").hover(function(){
        $(this).css("font-size", "35px");
        }, function(){
        $(this).css("font-size", "15px");
        });

    $("#repolink").click( function() {
        loadDoc('https://api.github.com/users/sedhawk/repos', loadRepoCallback);
        });
});



// -------------------------------------------------------------
// EasyPieChart
// -------------------------------------------------------------

(function () {

    $('.language-skill').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $('.chart').easyPieChart({
                //your configuration goes here
                easing: 'easeOut',
                delay: 3000,
                scaleColor: false,
                animate: 2000,
                onStep: function(from, to, percent) {
                    this.el.children[0].innerHTML = Math.round(percent);
                }

            });
        }
    }); 
}());

/*
// -------------------------------------------------------------
// MagnificPopup
// -------------------------------------------------------------

(function () {
    $('.portfolio-info a').magnificPopup({
      type: 'image',
      gallery:{
        enabled:true
      }
    });
}());
*/
// -------------------------------------------------------------
// Navigation Scroll
// -------------------------------------------------------------
/*
$(window).scroll(function(event) {
    Scroll();
}); 
*/
$('#mainmenu li a').click(function() {  
    $('html, body').animate({scrollTop: $(this.hash).offset().top -1}, 1000);
    return false;
});
/*
// User define function
function Scroll() {
    var contentTop      =   [];
    var contentBottom   =   [];
    var winTop      =   $(window).scrollTop();
    var rangeTop    =   200;
    var rangeBottom =   500;
    $('#mainmenu').find('.scroll a').each(function(){
        contentTop.push( $( $(this).attr('href') ).offset().top);
        contentBottom.push( $( $(this).attr('href') ).offset().top + $( $(this).attr('href') ).height() );
    })
    $.each( contentTop, function(i){
        if ( winTop > contentTop[i] - rangeTop ){
            $('#mainmenu li.scroll')
            .removeClass('current')
            .eq(i).addClass('current');          
        }
    })

};*/
  
// -------------------------------------------------------------
//  Sticky Nav
// -------------------------------------------------------------
(function () {  
    function menuToggle(){
        var windowWidth = $(window).width();
        if(windowWidth > 991 ){
            $(window).on('scroll', function(){
                if( $(window).scrollTop()>735 ){
                    $('.home-two .navbar').addClass('navbar-fixed-top animated fadeInDown');
                } else {
                    $('.home-two .navbar').removeClass('navbar-fixed-top animated fadeInDown');
                };
            });
        }else{
            
            $('.home-two .navbar').addClass('navbar-fixed-top');
                
        };  
    }

    menuToggle();
}());

// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

//Create a dynamic list of your GitHub repositories using an AJAX request
function loadDoc(url, callback) {
    const gitHubRequest = new XMLHttpRequest();
    gitHubRequest.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        callback(this);
      }
    };
    gitHubRequest.responseType = 'json';
    gitHubRequest.open("GET", url, true);
    gitHubRequest.send();
  }
  
  function loadRepoCallback(gitHubRequest) {
    var str = '<ol>';
    for(var repoIndex in gitHubRequest.response) {
        var name = gitHubRequest.response[repoIndex].name;
        var html_url = gitHubRequest.response[repoIndex].html_url;
      }
    document.getElementById("example").innerHTML = str += '<li><a href="'+ html_url + '">' + name + '</a></li></ol>';
  }