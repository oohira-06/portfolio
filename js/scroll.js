// JavaScript Document
$(function(){
    let title = $('.position');
    /*title.hide();*/
	
    $(window).scroll(function () {
       if ($(this).scrollTop() > 280) {
            title.fadeOut(1);
       } else {
            title.fadeIn(1);
       }
    });
});