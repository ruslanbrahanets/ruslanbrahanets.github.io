var $preloader = $('#page'),
	$svg_anm   = $('#loader');
	$svg_anm.delay(1000).fadeOut('slow');
	$preloader.delay(1000).fadeOut('slow');
$(document).ready(function () {
    $(window).on('load', function () {
     
    });    
    function heightDetect() {
        $(".wdt").css("height", $(window).height());
	};
	heightDetect();
        $(window).resize(function() {
		heightDetect();
	});
});




