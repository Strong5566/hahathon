//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
	

	
});


/*$(function(){
	var y = $(document).scrollTop();
    var t = $(".about-section").offset().top;
    if (y > t) {
		$(".about-section").css('background', 'url(../img/p3-09.jpg) no-repeat center center scroll');
    } else {
        $(".about-section").css('background', 'transparent');
    }
});*/
//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        rollTo($(this).attr("gear-target"));
        var $anchor = $(this);
        skipWaypoint=true;
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo', function(){
            skipWaypoint=false;
        });
        event.preventDefault();
    });
});
