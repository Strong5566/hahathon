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

$('#about').waypoint(function(direction) {
	$('#bg2').animate({
		opacity:1
	});
	$('#bg3').animate({
		opacity:0
	});
	$('#bg1').animate({
		opacity:0
	});
	$('#bg4').animate({
		opacity:0
	});
}) ;

$('#benefit').waypoint(function(direction) {
	$('#bg2').animate({
		opacity:1
	});
	$('#bg3').animate({
		opacity:0
	});
	$('#bg1').animate({
		opacity:0
	});
	$('#bg4').animate({
		opacity:0
	});
},
{ offset: 'bottom-in-view' }) ;


$('#join').waypoint(function(direction) {
	$('#bg2').animate({
		opacity:0
	});
	$('#bg3').animate({
		opacity:0
	});	
	$('#bg1').animate({
		opacity:0
	});
	$('#bg4').animate({
		opacity:1
	});	
}) ;

$('#time').waypoint(function(direction) {
	$('#bg2').animate({
		opacity:0
	});
	$('#bg3').animate({
		opacity:0
	});
	$('#bg1').animate({
		opacity:1
	});
	$('#bg4').animate({
		opacity:0
	});	
},
{ offset: 'bottom-in-view' }) ;

$('#QA').waypoint(function(direction) {
	$('#bg2').animate({
		opacity:0
	});
	$('#bg3').animate({
		opacity:1
	});
	$('#bg1').animate({
		opacity:0
	});
	$('#bg4').animate({
		opacity:0
	});		
}) ;

 $('#intro2').waypoint(function(direction) {

     if(skipWaypoint) return;
     console.log(direction)
     rollTo($('#li_page-top'));
 }) ;

/*$('.dropdown').hover(function(){ 
  $('.dropdown-toggle', this).trigger('click'); 
});*/