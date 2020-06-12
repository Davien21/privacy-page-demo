$(document).ready(function(){
	$(".dropper").click(function(){
		alert('message?: DOMString');
		$(this).find('.drop').animate({
		  height: 'toggle',
		});
	});
	
});
