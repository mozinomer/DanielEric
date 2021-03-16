$('.hamburger').click( function(e) {
	$('.menuContainerFUll').fadeToggle();
	$(this).toggleClass('active');
})