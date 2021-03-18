if ( $(window).width() > 1000 ) {
	AOS.init({
		once: true
	})
}
$('.testimonialsSlider').slick({
	slidesToShow: 2.5,
	slideToScroll: 2,
	infinite: false,
	dots: false,
	arrows: false,
	centerMode: false,
	responsive: [
	{
		breakpoint: 768,
		settings: {
			slidesToShow: 1.3,
			slidesToScroll: 1,	
		}
	}
	]
});
$(window).on('scroll', function () {
	var scrolled = $(this).scrollTop();
	$('.bannerContainerHomepahe .container').css({
		'transform': 'translate3d(0, ' + -(scrolled * 0.40) + 'px, 0)',
		'opacity': 1 - scrolled / 400
	});
	$('.contentContainerLeftBox .imageWrapperBox').css({
		'transform': 'translate3d(0, ' + -(scrolled * 0.40) + 'px, 0)',
		'opacity': 1 - scrolled / 400
	});
});

$(document).ready(function() {
	$(".title").lettering();

});
var words = $(".checks1").text().split(" ");
$(".checks1").empty();
$.each(words, function(i, v) {
	$(".checks1").append($('<span class="title">&nbsp;').text(v));
});
var flag = true;
function animation() {
	var title1 = new TimelineMax();
	title1.to(".button", 0, {visibility: 'hidden', opacity: 0})
	title1.staggerFromTo(".title span", 0.5, 
		{ opacity: 1, height: 0},
		{ opacity: 1, height: 40}, 0.05);
	title1.to(".button", 0.2, {visibility: 'visible' ,opacity: 1})
}
$(window).scroll(function() {
	var top_of_element = $(".contentStartAfterBanner").offset().top;
	var bottom_of_element = $(".contentStartAfterBanner").offset().top + $(".contentStartAfterBanner").outerHeight();
	var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
	var top_of_screen = $(window).scrollTop();
	if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element) && flag){
		animation();
		console.log('in h')
		flag = false;
	} else {}
});