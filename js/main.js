$(document).ready(function() {

});

$('a').on('click', function(e) {
  e.preventDefault();
});

$('.readmore').on('click', function() {
	$(this).hide();
	$(this).siblings().slideDown(80);
});

$('.readless').on('click', function() {
	$(this).hide();
	$(this).prev().slideUp(80);
	$(this).siblings('.readmore').show();
});

$('.learnmore').on('click', function() {
	$(this).hide();
	$(this).next().slideDown();
});
