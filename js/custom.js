$('#sign-btn').click(function(){


	alert("抱歉，11/7才開放報名唷~");
});

function rollTo(btn){
    $('.rotation').stop();
	var left = $(btn).position().left + $(btn).width()/2 - 51
	var theta = left - parseInt($('.rotation').css('margin-left'))
	$('.rotation').animate({
		'margin-left' : left,
		'margin-right' : -50-left
	},
	{
		duration: Math.abs(theta)*3
	});
	$('.rotation').animateRotate(theta, Math.abs(theta)*3);
}

var skipWaypoint=false;
$.fn.animateRotate = function(angle, duration, easing, complete) {
  var args = $.speed(duration, easing, complete);
  var step = args.step;
  return this.each(function(i, e) {
    args.complete = $.proxy(args.complete, e);
    args.step = function(now) {
      $.style(e, 'transform', 'rotate(' + now + 'deg)');
      if (step) return step.apply(e, arguments);
    };

    $({deg: 0}).animate({deg: angle}, args);
  });
};

var buttons = ['about', 'join', 'QA', 'partners', 'team', 'contact'];
$.each(buttons, function(i, b){
    $('#'+b).waypoint(function(direction) {
        if(skipWaypoint) return;
        rollTo($('#li_'+b));
		
	}) ;
});

$('#intro2').waypoint(function(direction) {
    if(skipWaypoint) return;
    console.log(direction)
    rollTo($('#li_page-top'));
}) ;

$(function() {
		
    $('#prev').bind('click', function(event) {
		var tops = [];
		
		tops.push($('#intro').offset().top);
		tops.push($('#intro2').offset().top);
		tops.push($('#about').offset().top);
		tops.push($('#special').offset().top);
		tops.push($('#join').offset().top);
		tops.push($('#QA').offset().top);
		tops.push($('#partners').offset().top);
		tops.push($('#sponsors').offset().top);
		tops.push($('#team').offset().top);
		tops.push($('#contact').offset().top);
		tops.push(document.body.scrollHeight);
		var i;
		var now = $(this).offset().top;
		for(i = tops.length-1; i>=1; i--){
			if(tops[i-1]<now && now<tops[i] && i>=2){
				 $('html, body').stop().animate({
						scrollTop: tops[i-2]
					}, 1500, 'easeInOutExpo');
				event.preventDefault();
				break;
			}
		}
    });
    $('#next').bind('click', function(event) {
		var tops = [];
		
		tops.push($('#intro').offset().top);
		tops.push($('#intro2').offset().top);
		tops.push($('#about').offset().top);
		tops.push($('#special').offset().top);
		tops.push($('#join').offset().top);
		tops.push($('#QA').offset().top);
		tops.push($('#partners').offset().top);
		tops.push($('#sponsors').offset().top);
		tops.push($('#team').offset().top);
		tops.push($('#contact').offset().top);
		tops.push(document.body.scrollHeight);
		var i;
		var now = $(this).offset().top;
		for(i = 1; i<tops.length; i++){
			if(now>=tops[i-1] && now<tops[i]){
				 $('html, body').stop().animate({
						scrollTop: tops[i]
					}, 1500, 'easeInOutExpo');
				event.preventDefault();
				break;
			}
		}
    });
});

/*$('.dropdown').hover(function(){ 
  $('.dropdown-toggle', this).trigger('click'); 
});*/