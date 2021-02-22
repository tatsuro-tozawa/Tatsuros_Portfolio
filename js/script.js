$(function() {

    $('#back a').on('click',function() {
        $('body, html').animate( {
            scrollTop:0
        }, 800);
            event.preventDefault();
    });

});

$(function() {
	$('.js-btn').on('click',function() {
		$('.menu , .btn-line').toggleClass('open');
	})
});