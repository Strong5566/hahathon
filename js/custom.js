$('#sign-btn').click(function(){


	alert("抱歉，11/7才開放報名唷~");
});

$('.nav>li').click(function(){
	var left = $(this).position().left + $(this).width()/2 - 51
	var theta = left - parseInt($('.rotation').css('margin-left'))
	$('.rotation').animate({
		'margin-left' : left,
		'margin-right' : -50-left
	},
	{
		duration: Math.abs(theta)*3
	});
	$('.rotation').animateRotate(theta, Math.abs(theta)*3);
});

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


/*$('.dropdown').hover(function(){ 
  $('.dropdown-toggle', this).trigger('click'); 
});*/