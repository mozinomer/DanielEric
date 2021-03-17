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
})